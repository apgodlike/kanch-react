import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import FilterItems from "./FilterItems";
import axios from "axios";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [productList, setProductList] = useState([]);

  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: false,
    outOfStock: false,
  });

  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  function handlePriceFilter(e) {
    const id = e.target.id;
    const value = e.target.value;

    setPriceFilter((prevValue) => {
      return { ...prevValue, [id]: value };
    });
  }

  function handleAvailabilityFilter(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    setAvailabilityFilter((prevValue) => {
      return { ...prevValue, [id]: checked };
    });
  }
  function handleResetFilter() {
    setAvailabilityFilter({
      inStock: false,
      outOfStock: false,
    });
  }
  function handlePriceResetFilter() {
    setPriceFilter({
      minPrice: 0,
      maxPrice: 0,
    });
  }

  useEffect(() => {
    async function fetchProductList() {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/api/products/all`
      );
      console.log(res.data);
      setItems(res.data);
      setProductList(res.data);
    }
    fetchProductList();
  }, []);

  useEffect(() => {
    let filteredValue = productList.filter((item) => {
      if (availabilityFilter.inStock === availabilityFilter.outOfStock) {
        return true;
      }

      if (item.isAvailable && availabilityFilter.inStock) {
        return true;
      }
      if (!item.isAvailable && availabilityFilter.outOfStock) {
        return true;
      }
      return false;
    });

    filteredValue = filteredValue.filter((item) => {
      if (!priceFilter.minPrice && !priceFilter.maxPrice) {
        return true;
      }
      if (
        item.unitPrice >= priceFilter.minPrice &&
        item.unitPrice <= priceFilter.maxPrice
      ) {
        return true;
      }
      return false;
    });
    setItems(filteredValue);
  }, [productList, availabilityFilter, priceFilter]);

  return (
    <div className="">
      <div className="flex flex-col mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
        <h2 className="text-grey-900 text-3xl p-5">Products</h2>
        <div className="px-5">
          <FilterItems
            availabilityFilter={availabilityFilter}
            handleAvailabilityFilter={handleAvailabilityFilter}
            handleResetFilter={handleResetFilter}
            handlePriceResetFilter={handlePriceResetFilter}
            handlePriceFilter={handlePriceFilter}
            priceFilter={priceFilter}
          />
        </div>
        <div>
          <ProductsList items={items} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
