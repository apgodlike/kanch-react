import React, { useState } from "react";

const FilterItems = () => {
  const [openAvailabilityFilter, setOpenAvailabilityFilter] = useState(false);
  const [openPriceFilter, setOpenPriceFilter] = useState(false);

  function toggleAvailability() {
    setOpenAvailabilityFilter(!openAvailabilityFilter);
  }

  function togglePriceFilter() {
    setOpenPriceFilter(!openPriceFilter);
  }

  return (
    <div>
      <div className="filter relative flex gap-5">
        <p className="">Filter by:</p>
        <div>
          <button onClick={toggleAvailability} className="">
            Availability
          </button>
          <div
            className={`${
              !openAvailabilityFilter && "hidden"
            } absolute top-7 left-24 bg-[#EBD9B4] rounded-lg border border-solid-white shadow-xl p-6`}
          >
            <div className="text-black flex justify-between gap-24">
              <p>0 Selected</p>
              <button>Reset</button>
            </div>
            <div className="bg-gray-700 h-0.5 rounded-lg mt-3"></div>
            <div className="flex flex-col pt-3 gap-2">
              <label htmlFor="instock">
                <input type="checkbox" id="instock" />
                In Stock
              </label>
              <label htmlFor="outofstock">
                <input type="checkbox" id="outofstock" />
                Out Of Stock
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <button onClick={togglePriceFilter} className="">
            Price
          </button>
          <div
            className={`${
              !openPriceFilter && "hidden"
            } absolute top-7 left-26 bg-[#EBD9B4] rounded-lg border border-solid-white shadow-xl p-6`}
          >
            <div className="flex gap-12">
              <p>The highest price is $5,300.00</p>
              <button> Reset</button>
            </div>
            <div className="bg-gray-700 h-0.5 rounded-lg mt-3 mb-5"></div>
            <div className="my-3 flex">
              $
              <div className="border border-solid border-gray-300 hover:border-gray-600 rounded-md w-24 mr-10">
                <input
                  type="number"
                  className="bg-transparent w-full"
                  placeholder=" From"
                  min={0}
                  max={5000}
                />
              </div>
              $
              <div className="border border-solid border-gray-300 hover:border-gray-600 rounded-md w-24">
                <input
                  type="number"
                  className="bg-transparent w-full"
                  placeholder=" To"
                  min={0}
                  max={5000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sort"></div>
    </div>
  );
};

export default FilterItems;
