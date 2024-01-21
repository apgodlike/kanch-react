import React from "react";
import { Link } from "react-router-dom";

const ButtonLarge = (props) => {
  return (
    <div className="max-w-80 md:w-72">
      <button className="w-full text-gray-800 border border-solid bg-[#9DBC98] rounded-md h-12 hover:bg-[#9DBC98] transform hover:scale-105 transition">
        <Link
          className="flex w-full h-full justify-center items-center p-5"
          to={props.to}
        >
          {props.displayText}
        </Link>
      </button>
    </div>
  );
};

export default ButtonLarge;
