import React from "react";
import { Link } from "react-router-dom";

const ButtonLarge = (props) => {
  return (
    <>
      <button
        className="w-full p-3 px-7 text-gray-800 border border-solid bg-[#9DBC98] rounded-full hover:bg-[#9DBC98] transform hover:scale-105 transition"
        onClick={props.onClick}
      >
        {props.displayText}
      </button>
    </>
  );
};

export default ButtonLarge;
