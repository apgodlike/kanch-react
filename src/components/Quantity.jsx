import React from "react";

const Quantity = ({
  invalidQuantity,
  setAddToCart,
  handleInputCount,
  addToCart,
}) => {
  return (
    <div>
      <div className="flex rounded-lg border border-solid border-[#9DBC98] justify-start w-max mb-5">
        <button
          id="minus"
          disabled={invalidQuantity}
          className={`w-12 h-12 hover:bg-[#9DBC98] transform hover:scale-105 transition ${
            invalidQuantity && "cursor-not-allowed"
          }`}
          onClick={() => {
            setAddToCart((prevValue) => {
              return {
                ...prevValue,
                addedQuantity: Number(prevValue.addedQuantity) - 1,
              };
            });
          }}
        >
          -
        </button>
        <input
          onChange={handleInputCount}
          className="ease-in-out delay-150 focus:scale-110 focus:border focus:border-[#9DBC98] w-12 h-12 leading-tight focus:outline-none focus:shadow-outline appearance-none bg-transparent text-center"
          type="number"
          value={addToCart.addedQuantity}
          max="5"
        />
        <button
          id="add"
          className="w-12 h-12 hover:bg-[#9DBC98] transform hover:scale-105 transition"
          onClick={() => {
            setAddToCart((prevValue) => {
              return {
                ...prevValue,
                addedQuantity: Number(prevValue.addedQuantity) + 1,
              };
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
