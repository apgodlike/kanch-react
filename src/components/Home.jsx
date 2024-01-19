import React from "react";
import Home_image from "../images/home.jpg";
import GetInTouch from "./GetInTouch";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="md:flex md:items-center md:justify-evenly gap-10">
        {/* <div className=""> */}
        <img className="w-full h-auto md:w-1/2" src={Home_image} />
        {/* </div> */}
        <div className="text-center py-3">
          <h2 className="text-gray-700 text-3xl py-2">Handmade Textured Art</h2>
          <p className="text-xl text-gray-600">from the Australian Costline</p>
          <div className="flex justify-center gap-10 mt-5 mb-7">
            <Link
              to="/shop"
              className="bg-[#638889] w-1/2 p-2 text-sm rounded-lg hover:scale-105"
            >
              Shop All
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white text-center py-10">
        <h2 className="text-gray-700 text-2xl py-2">
          Free shipping Australia Wide
        </h2>
        <p className="text-xs text-gray-600">
          International shipping available & calculated at checkout
        </p>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Home;
