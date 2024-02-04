import React, { useEffect } from "react";
import placeholder_image_1 from "../images/placeholder_image_1.jpg";
import placeholder_image_2 from "../images/placeholder_image_2.jpg";
// import p400x600_image from "../images/400x600.png";
import p400x600_image from "../images/300x400.png";
import { Link } from "react-router-dom";
import axios from "axios";

let items = [
  {
    id: 1,
    title: "Up",
    image: p400x600_image,
    price: "$2600 AUD",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Winnie blue",
    image: p400x600_image,
    price: "$1200 AUD",
    isAvailable: false,
  },
  {
    id: 3,
    title: "Sea Breeze",
    image: p400x600_image,
    price: "$1200 AUD",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Polor express",
    image: p400x600_image,
    price: "$2200 AUD",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Pic5",
    image: p400x600_image,
    price: "$2300 AUD",
    isAvailable: true,
  },
  {
    id: 6,
    title: "Pic6",
    image: p400x600_image,
    price: "$2200 AUD",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Pic7",
    image: p400x600_image,
    price: "$2200 AUD",
    isAvailable: true,
  },
];

const ProductsList = ({ items }) => {
  return (
    <div className="">
      <ul className="px-5 pb-10 pt-5 grid grid-cols-2 gap-5 md:gap-x-9 md:grid-cols-3 place-items-center xl:grid-cols-4">
        {items.map((item) => {
          return (
            <li
              id={item.productId}
              key={item.productId}
              className="cursor-pointer w-full hover:scale-103 m-1 p-2 border border-solid border-white rounded-md hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
            >
              <Link to={`/shop/${item.productId}`}>
                <img src={p400x600_image} className="w-full" />
                <div className="relative px-1 pt-2">
                  <p className="text-gray-800 text-xl">{item.productName}</p>
                  <p className="text-gray-700 text-sm">{item.unitPrice}</p>
                  <div className="absolute bg-[#9DBC98] px-1 rounded-lg bottom-16 left-2 ">
                    <p className="text-gery-700 text-sm md:text-xs">
                      {item.isAvailable ? <>Available</> : <>Sold Out</>}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
