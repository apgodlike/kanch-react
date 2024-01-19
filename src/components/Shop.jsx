import React from "react";
import ProductsList from "./ProductsList";
import FilterItems from "./FilterItems";

const Shop = () => {
  return (
    <div className="">
      <div className="flex flex-col mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
        <h2 className="text-grey-900 text-3xl p-5">Products</h2>
        <div className="px-5">
          <FilterItems />
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
