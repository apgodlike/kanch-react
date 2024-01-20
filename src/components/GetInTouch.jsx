import React from "react";
import { Link } from "react-router-dom";
import ButtonMedium from "./ButtonMedium";

const GetInTouch = () => {
  return (
    <div className="px-10 py-10 flex flex-col items-center justify-center">
      {/* <img className="rounded-full w-1/2" src={GetInTouch_Image} /> */}
      <h3 className="text-gray-700 text-3xl py-2 mb-1">
        Want to get in touch?
      </h3>
      <p className="text-xs text-gray-600 text-center">
        Whether you are after a custom piece, or just wanting to know when the
        next collection will drop, reach out and we will be in touch!
      </p>
      <div className="mt-5">
        <Link to="/contactus">
          <ButtonMedium displayText="Reach Out!" />
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
