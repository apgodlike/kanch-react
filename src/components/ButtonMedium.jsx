import React from "react";

const ButtonMedium = (props) => {
  return (
    <div>
      {" "}
      <button className="bg-transparent border border-solid border-[#9DBC98] hover:bg-[#9DBC98] px-5 py-1 min-w-24 hover:scale-105 rounded-lg">
        {props.displayText}
      </button>
    </div>
  );
};

export default ButtonMedium;
