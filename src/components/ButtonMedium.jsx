import React from "react";

const ButtonMedium = (props) => {
  return (
    <div>
      <button
        type={props.type}
        onClick={(e) => {
          props.onClick && props.onClick(e);
        }}
        className="border border-solid bg-[#9DBC98] hover:bg-[#9DBC98] px-5 py-1 min-w-24 hover:scale-105 rounded-lg"
      >
        {props.displayText}
      </button>
    </div>
  );
};

export default ButtonMedium;
