import React, { useEffect, useRef, useState } from "react";
import ButtonLarge from "./ButtonLarge";
import axios from "axios";
import CartItem from "./CartItem";
import image2 from "../images/1080p.jpg";

const Cart = () => {
  const userId = localStorage.getItem("userId");
  const [productList, setProductList] = useState([
    {
      productId: "",
      quantity: 0,
      productName: "",
      unitPrice: 0,
      availableQuantity: 0,
      isAvailable: false,
    },
  ]);

  async function handleDelete(productId) {
    console.log("e.target");
    // console.log(e.target);
    // const productId = e.target.id;
    const response = await axios.delete(
      `${process.env.REACT_APP_BASE_URI}/api/cart/${productId}`,
      {
        params: {
          id: userId,
        },
      }
    );

    const actualProductList = productList.filter((product) => {
      return product.productId != productId;
    });
    setProductList(actualProductList);
  }

  useEffect(() => {
    async function getCartItems() {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/api/cart/list`,
        {
          params: {
            id: userId,
          },
        }
      );
      console.log(response.data);
      setProductList(response.data.products);
    }
    getCartItems();
  }, []);

  const fetchedProductsRef = useRef([]);
  useEffect(() => {
    const fetchProductDetails = async (productId) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URI}/api/products/${productId}`
        );
        const responseBody = response.data;

        setProductList((prevValue) => {
          const index = prevValue.findIndex(
            (product) => product.productId === productId
          );

          if (index !== -1) {
            const updatedProductList = [...prevValue];
            updatedProductList[index] = {
              ...updatedProductList[index],
              productName: responseBody.productName,
              unitPrice: responseBody.unitPrice,
              availableQuantity: responseBody.availableQuantity,
              isAvailable: responseBody.isAvailable,
            };

            return updatedProductList;
          }

          return prevValue;
        });
      } catch (error) {
        console.error(
          `Error fetching product details for productId ${productId}:`,
          error
        );
      }
    };

    productList.forEach((product) => {
      if (!fetchedProductsRef.current.includes(product.productId)) {
        fetchProductDetails(product.productId);
        fetchedProductsRef.current.push(product.productId);
      }
    });
  }, [productList]);

  return (
    <div>
      {/* className="flex justify-center my-10 flex-col items-center gap-10"> */}
      {productList.length == 0 && (
        <div className="flex justify-center align-middle py-24">
          <p className="text-3xl">Your cart is empty</p>
        </div>
      )}
      {productList.map((product) => {
        return (
          <>
            <CartItem
              id={product.productId}
              key={product.productId}
              src={image2}
              productName={product.productName}
              unitPrice={product.unitPrice}
              totalPrice={product.unitPrice}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
      {/* <ButtonLarge to="/shop" displayText="Continue Shopping" /> */}
    </div>
  );
};

export default Cart;
