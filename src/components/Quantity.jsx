import React, { useEffect, useState } from "react";

const Quantity = ({ setAddToCart, addToCart }) => {
  const [invalidQuantity, setInvalidQuantity] = useState(false);

  function handleInputCount(e) {
    const value = e.target.value;
    setAddToCart((prevValue) => {
      return { ...prevValue, addedQuantity: value };
    });
  }

  useEffect(() => {
    if (addToCart.addedQuantity <= 1) {
      setInvalidQuantity(true);
      setAddToCart((prevValue) => {
        return { ...prevValue, addedQuantity: 1 };
      });
    } else {
      setInvalidQuantity(false);
    }
  }, [addToCart.addedQuantity]);
  return (
    <div className="flex rounded-lg border border-solid border-[#9DBC98] justify-start w-max">
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
        onChange={(e) => {
          handleInputCount(e);
        }}
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
  );
};

export default Quantity;
