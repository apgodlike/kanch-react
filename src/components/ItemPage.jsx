import React, { useEffect, useState } from "react";
import image from "../images/300x400.png";
import image2 from "../images/1080p.jpg";
import { useParams } from "react-router-dom";
import ExpandableImage from "./ExpandableImage";
import ButtonLarge from "./ButtonLarge";

const ItemPage = ({ handleCartItems }) => {
  const { id } = useParams();
  const [itemCount, setItemCount] = useState(1);
  const [invalidCount, setInvalidCount] = useState(false);

  useEffect(() => {
    if (itemCount <= 0) {
      setInvalidCount(true);
      setItemCount(1);
    } else {
      setInvalidCount(false);
    }
  }, [itemCount]);

  return (
    <div className="flex flex-col md:flex-row md:mx-auto md:justify-center md:gap-5">
      <div className="image mx-auto md:mx-0 m-5">
        <ExpandableImage src={image2} alt="Description of the image" />
      </div>
      <div className="item-details m-5 gap-1.5 flex flex-col md:w-96">
        <p className="text-gray-600 text-sm md:text-lg">Collection Name {id}</p>
        <p className="text-gray-600 text-2xl md:text-3xl">Item Name</p>
        <p className="text-gray-600 text-md md:text-xl">$5000 AUD</p>
        <p className="text-gray-600 text-xs">
          Shipping calaculated at checkout
        </p>
        <p className="text-gray-600 md:text-md">Quantity</p>
        <div className="flex rounded-lg border border-solid border-[#9DBC98] justify-start w-max mb-5">
          <button
            id="minus"
            disabled={invalidCount}
            className={`w-12 h-12 hover:bg-[#9DBC98] transform hover:scale-105 transition ${
              invalidCount && "cursor-not-allowed"
            }`}
            onClick={() => {
              setItemCount((prevCount) => {
                return prevCount - 1;
              });
            }}
          >
            -
          </button>
          <input
            onChange={(e) => {
              setItemCount(e.target.value);
            }}
            className="ease-in-out delay-150 focus:scale-110 focus:border focus:border-[#9DBC98] w-12 h-12 leading-tight focus:outline-none focus:shadow-outline appearance-none bg-transparent text-center"
            type="number"
            value={itemCount}
          />
          <button
            id="add"
            className="w-12 h-12 hover:bg-[#9DBC98] transform hover:scale-105 transition"
            onClick={() => {
              setItemCount((prevCount) => {
                return prevCount + 1;
              });
            }}
          >
            +
          </button>
        </div>
        <div
          onClick={() => {
            handleCartItems({
              id: 6,
              name: "test1",
              quantity: 6,
            });
          }}
        >
          <ButtonLarge to="/" displayText="Add to Cart" />
        </div>
        <div className="mt-5">
          <p>Description</p>
          <ul className="ml-9 gap-2 flex flex-col mt-3 list-disc">
            <li>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li>It is a long established fact that a reader.</li>
            <li>Lorem Ipsum is simply dummy text.</li>
            <li>The standard chunk of Lorem Ipsum.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
