import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import FilterItems from "./FilterItems";
import axios from "axios";

const Shop = () => {
  const [items, setItems] = useState([]);

  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: false,
    outOfStock: false,
  });

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

  useEffect(() => {
    async function fetchProductList() {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/api/products/all`
      );
      console.log(res.data);
      setItems(res.data);
    }
    fetchProductList();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
        <h2 className="text-grey-900 text-3xl p-5">Products</h2>
        <div className="px-5">
          <FilterItems
            availabilityFilter={availabilityFilter}
            handleAvailabilityFilter={handleAvailabilityFilter}
            handleResetFilter={handleResetFilter}
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
