import React, { useEffect, useState } from "react";
import image from "../images/300x400.png";
import image2 from "../images/1080p.jpg";
import { useParams } from "react-router-dom";
import ExpandableImage from "./ExpandableImage";
import ButtonLarge from "./ButtonLarge";
import axios from "axios";
import Quantity from "./Quantity";

const ItemPage = ({ handleCartItems }) => {
  const userId = localStorage.getItem("userId");
  const { id } = useParams();

  const [itemsFromBackend, setItemsFromBackend] = useState({
    _id: "",
    productName: "",
    unitPrice: 0,
    availableQuantity: 0,
    isAvailable: false,
    productId: "",
    productImage: "",
    __v: 0,
  });

  const [addToCart, setAddToCart] = useState({
    _id: userId,
    products: [],
    addedQuantity: 1,
  });

  async function handleAddToCartSave() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/cart/addtocart`,
        addToCart,
        { headers: { "Content-Type": "application/json" } }
      );
      const responseBody = response.data;
      setAddToCart((prevValue) => {
        return {
          ...prevValue,
          _id: responseBody._id,
        };
      });

      !userId && localStorage.setItem("userId", responseBody._id);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function getItemDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/api/products/${id}`
      );
      const responseBody = response.data;
      setItemsFromBackend(responseBody);

      setAddToCart((prevValue) => {
        return {
          ...prevValue,
          products: [responseBody.productId],
        };
      });
    }

    getItemDetails();
  }, [id]);

  useEffect(() => {
    async function fetchProductQuantity() {
      if (itemsFromBackend.productId) {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URI}/api/cart/getQuantity`,
          { params: { id: userId, productId: itemsFromBackend.productId } }
        );
        const responseBody = response.data;
        if (response.status != 200) {
          return;
        }
        setAddToCart((prevValue) => {
          return {
            ...prevValue,
            addedQuantity: [responseBody.quantity],
          };
        });
      }
    }

    fetchProductQuantity();
  }, [itemsFromBackend]);

  return (
    <div className="flex flex-col md:flex-row md:mx-auto md:justify-center md:gap-5">
      <div className="image mx-auto md:mx-0 m-5">
        <ExpandableImage
          src={
            itemsFromBackend.productImage
              ? `${process.env.REACT_APP_BASE_URI}${itemsFromBackend.productImage}`
              : image2
          }
          alt="Description of the image"
        />
      </div>
      <div className="item-details m-5 gap-1.5 flex flex-col md:w-96">
        <p className="text-gray-600 text-sm md:text-lg">
          {itemsFromBackend.productName}
        </p>
        <p className="text-gray-600 text-2xl md:text-3xl">Item Name</p>
        <p className="text-gray-600 text-md md:text-xl">
          {itemsFromBackend.unitPrice}
        </p>
        <p className="text-gray-600 text-xs">
          Shipping calaculated at checkout
        </p>
        <p className="text-gray-600 md:text-md">Quantity</p>

        <Quantity setAddToCart={setAddToCart} addToCart={addToCart} />

        <div className="max-w-80 md:w-72">
          <ButtonLarge
            to="/"
            displayText="Add to Cart"
            onClick={handleAddToCartSave}
          />
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
