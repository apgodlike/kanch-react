import React, { Fragment, useEffect, useRef, useState } from "react";
import ButtonLarge from "./ButtonLarge";
import axios from "axios";
import CartItem from "./CartItem";
import image2 from "../images/1080p.jpg";
import { Link, redirect } from "react-router-dom";
import { useCart } from "../context/useCart";

const Cart = () => {
  const userId = localStorage.getItem("userId");

  const { addToCart, handleDeleteProduct } = useCart();
  const [isEmpty, setIsEmpty] = useState(true);

  const [productList, setProductList] = useState([
    {
      productId: "",
      quantity: 0,
      productName: "",
      unitPrice: 0,
      availableQuantity: 0,
      isAvailable: false,
      productImage: "",
    },
  ]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    function calculateTotalPrice() {
      let totalPrice = 0;
      productList.forEach((product) => {
        totalPrice += product.unitPrice * product.quantity;
      });
      return totalPrice;
    }
    setTotalPrice(calculateTotalPrice);
  }, [productList]);

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
      return product.productId !== productId;
    });
    console.log(setProductList(actualProductList));
    setProductList(actualProductList);
    handleDeleteProduct(productId);
  }

  useEffect(() => {
    console.log("response.data");
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
      setIsEmpty(false);
    }
    if (userId) {
      getCartItems();
    }
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
              productImage: responseBody.productImage,
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
        if (product.productId) {
          fetchProductDetails(product.productId);
          fetchedProductsRef.current.push(product.productId);
        }
      }
      addToCart(product.productId);
    });
    productList.length === 0 && setIsEmpty(true);
  }, [productList]);

  return (
    <div className="bg-[#fff6e0]">
      <div className="bg-[#fff6e0] pt-10 text-gray-700 w-full md:mx-auto md:w-10/12 lg:w-8/12">
        <div className="flex justify-between px-10 text-lg pb-10">
          <p>Your cart</p>
          <Link className="underline" to="/shop">
            Continue Shopping
          </Link>
        </div>
        {isEmpty ? (
          <div className="flex justify-center align-middle py-24">
            <p className="text-3xl">Your cart is empty</p>
          </div>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  <th className="col-start-1">PRODUCT</th>
                  <th className="col-start-2 col-span-1"></th>
                  <th className="col-start-3 md:col-start-4">TOTAL</th>
                </tr>
              </thead>
              {productList.map((product) => {
                return (
                  <Fragment key={product.productId}>
                    <CartItem
                      productList={productList}
                      setProductList={setProductList}
                      id={product.productId}
                      key={product.productId}
                      productId={product.productId}
                      addedQuantity={product.quantity}
                      src={
                        product.productImage
                          ? `${process.env.REACT_APP_BASE_URI}${product.productImage}`
                          : image2
                      }
                      productName={product.productName}
                      unitPrice={product.unitPrice}
                      totalPrice={product.unitPrice * product.quantity}
                      handleDelete={handleDelete}
                    />
                  </Fragment>
                );
              })}
            </table>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
              <p className="flex justify-center col-start-2 md:col-start-3">
                Subtotal
              </p>
              <p className="col-start-3 md:col-start-4 flex justify-center">
                {`$${totalPrice}`}
              </p>
              <div className="col-start-2 col-span-2 md:col-start-4 md:pl-0 flex justify-center py-5">
                <Link to="/customerdetails">
                  <ButtonLarge displayText="Check Out!" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
