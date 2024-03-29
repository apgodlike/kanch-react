import React, { useEffect, useRef, useState } from "react";

const FilterItems = ({
  availabilityFilter,
  handleAvailabilityFilter,
  handleResetFilter,
  handlePriceResetFilter,
  handlePriceFilter,
  priceFilter,
}) => {
  const [openAvailabilityFilter, setOpenAvailabilityFilter] = useState(false);
  const [openPriceFilter, setOpenPriceFilter] = useState(false);
  const availabilityRef = useRef(null);
  const priceRef = useRef(null);

  function toggleAvailability() {
    setOpenAvailabilityFilter(!openAvailabilityFilter);
  }

  function togglePriceFilter() {
    setOpenPriceFilter(!openPriceFilter);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        availabilityRef.current &&
        !availabilityRef.current.contains(event.target)
      ) {
        setOpenAvailabilityFilter(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setOpenPriceFilter(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="filter relative flex gap-5">
        <p className="">Filter by:</p>
        <div ref={availabilityRef}>
          <button onClick={toggleAvailability} className="">
            Availability
          </button>
          <div
            className={`${
              !openAvailabilityFilter && "hidden"
            } absolute top-7 left-24 bg-[#F9EFDB] rounded-lg border border-solid-white shadow-xl p-6`}
          >
            <div className="text-black flex justify-between gap-24">
              <p>0 Selected</p>
              <button id="reset" onClick={handleResetFilter}>
                Reset
              </button>
            </div>
            <div className="bg-gray-700 h-0.5 rounded-lg mt-3"></div>
            <div className="flex flex-col pt-3 gap-2">
              <label htmlFor="inStock">
                <input
                  type="checkbox"
                  id="inStock"
                  onChange={(e) => {
                    handleAvailabilityFilter(e);
                  }}
                  checked={availabilityFilter.inStock}
                />
                In Stock
              </label>
              <label htmlFor="outOfStock">
                <input
                  type="checkbox"
                  id="outOfStock"
                  onChange={(e) => {
                    handleAvailabilityFilter(e);
                  }}
                  checked={availabilityFilter.outOfStock}
                />
                Out Of Stock
              </label>
            </div>
          </div>
        </div>
        <div ref={priceRef} className="">
          <button onClick={togglePriceFilter} className="">
            Price
          </button>
          <div
            className={`${
              !openPriceFilter && "hidden"
            } absolute top-7 left-26 bg-[#F9EFDB] rounded-lg border border-solid-white shadow-xl p-6`}
          >
            <div className="flex gap-12">
              <p>The highest price is $5,300.00</p>
              <button onClick={handlePriceResetFilter}> Reset</button>
            </div>
            <div className="bg-gray-700 h-0.5 rounded-lg mt-3 mb-5"></div>
            <div className="my-3 flex">
              $
              <div className="border border-solid border-gray-300 hover:border-gray-600 rounded-md w-24 mr-10">
                <input
                  id="minPrice"
                  type="number"
                  className="bg-transparent w-full"
                  placeholder=" From"
                  min={0}
                  max={5000}
                  onChange={handlePriceFilter}
                  value={priceFilter.minPrice}
                />
              </div>
              $
              <div className="border border-solid border-gray-300 hover:border-gray-600 rounded-md w-24">
                <input
                  id="maxPrice"
                  type="number"
                  className="bg-transparent w-full"
                  placeholder=" To"
                  min={0}
                  max={5000}
                  onChange={handlePriceFilter}
                  value={priceFilter.maxPrice}
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
