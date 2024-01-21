import React from "react";
import ButtonLarge from "./ButtonLarge";

const Cart = () => {
  return (
    <div className="flex justify-center my-10 flex-col items-center gap-10">
      <p className="text-3xl">Your cart is empty</p>
      <ButtonLarge to="/shop" displayText="Continue Shopping" />
    </div>
  );
};

export default Cart;
