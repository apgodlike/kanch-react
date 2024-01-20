import React from "react";

const InputField = (props) => {
  return (
    <div className="my-0.5 relative border border-solid border-[#9DBC98] p-1.5 rounded-md w-full max-w-md md:max-w-xl">
      <input
        type={props.type}
        className="peer bg-transparent w-full focus:outline-none"
        placeholder=""
      />
      <span className="absolute left-1 peer-focus:scale-75 peer-focus:-top-2">
        {props.displayText}
      </span>
    </div>
  );
};

export default InputField;
