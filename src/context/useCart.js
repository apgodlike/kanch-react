import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
      setCartCount(storedCart.length);
    }
  }, []);

  // Update local storage and cart count whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart]);

  const addToCart = (product) => {
    let newProductArray = [];
    if (Array.isArray(product)) {
      newProductArray = product;
    } else {
      newProductArray.push(product);
    }
    newProductArray.forEach((item) => {
      if (item) {
        setCart((prevCartValue) => {
          if (prevCartValue.includes(item)) {
            return prevCartValue;
          }
          return [...prevCartValue, item];
        });
      }
    });
  };

  const handleDeleteProduct = (id) => {
    setCart((prevValue) => {
      return prevValue.filter((item) => {
        return item != id;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, handleDeleteProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
