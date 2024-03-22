import React from "react";

const InputField = (props) => {
  return (
    <div className="my-0.5 relative border border-solid border-[#9DBC98] p-1.5 rounded-md w-full max-w-md md:max-w-xl">
      <label>
        <input
          type={props.type}
          id={props.id}
          onChange={(e) => props.onChange(e)}
          className="peer bg-transparent w-full focus:outline-none"
          placeholder=""
          value={props.value}
          name={props.name}
        />
        <span
          className={`absolute left-2 ${
            props.value == ""
              ? "peer-focus:border peer-focus:border-[#9DBC98] peer-focus:bg-[#fff6e0] peer-focus:border-y-0 peer-focus:border-x-2 transition ease-in-out peer-focus:text-xs peer-focus:translate-x-0 peer-focus:-translate-y-3 peer-focus:px-2"
              : "border border-[#9DBC98] bg-[#fff6e0] border-y-0 border-x-2 transition ease-in-out text-xs translate-x-0 -translate-y-3 px-2"
          }`}
        >
          {props.displayText}
        </span>
      </label>
    </div>
  );
};

export default InputField;
