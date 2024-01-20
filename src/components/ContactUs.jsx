import React from "react";
import ButtonMedium from "./ButtonMedium";
import InputField from "./InputField";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:mx-auto md:w-10/12 m-10">
      <div className="flex gap-2 flex-col mx-2 items-center">
        <p className="m-1.5 w-full max-w-md md:max-w-xl text-xl md:text-2xl">
          Reach Out!
        </p>
        <InputField type="text" displayText="Name" />
        <InputField type="email" displayText="Email*" />
        <InputField type="text" displayText="Phone Number" />
        <div className="my-0.5 relative border border-solid border-[#9DBC98] w-full p-1.5 rounded-md max-w-md md:max-w-xl">
          <textarea
            type="text"
            className="peer bg-transparent w-full focus:outline-none h-24"
            placeholder=""
          ></textarea>
          <span className="absolute left-1 peer-focus:scale-75 peer-focus:-top-2">
            Comment
          </span>
        </div>
        <div className="m-1.5 w-full max-w-md md:max-w-xl">
          <ButtonMedium displayText="Send" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
