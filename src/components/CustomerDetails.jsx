import axios from "axios";
import React, { useState } from "react";
import InputField from "./InputField";
import ButtonMedium from "./ButtonMedium";

const CustomerDetails = () => {
  const userId = localStorage.getItem("userId");
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    userId: userId,
    name: "",
    email: "",
    phoneNumber: "",
    Address1: "",
    Address2: "",
    zipCode: "",
  });

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    setCustomerDetails((prevValue) => {
      return { ...prevValue, [id]: value };
    });
  }

  async function handleCheckout(e) {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URI}/api/checkout/create-checkout-session`,
      customerDetails
    );

    setRedirectUrl(response.data.url);
  }

  if (redirectUrl) {
    window.location.href = redirectUrl;
  }

  return (
    <div className="flex flex-col md:mx-auto md:w-10/12 m-10">
      <form
        className="flex flex-col items-center gap-1"
        action=""
        onSubmit={handleCheckout}
      >
        <InputField
          onChange={handleChange}
          id="name"
          name="name"
          type="name"
          displayText="name"
          value={customerDetails.name}
        />
        <InputField
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          displayText="email"
          value={customerDetails.email}
        />
        <InputField
          onChange={handleChange}
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          displayText="phoneNumber"
          value={customerDetails.phoneNumber}
        />
        <InputField
          onChange={handleChange}
          id="Address1"
          name="Address1"
          type="Address1"
          displayText="Address1"
          value={customerDetails.Address1}
        />
        <InputField
          onChange={handleChange}
          id="Address2"
          name="Address2"
          type="Address2"
          displayText="Address2"
          value={customerDetails.Address2}
        />
        <InputField
          onChange={handleChange}
          id="zipCode"
          name="zipCode"
          type="zipCode"
          displayText="zipCode"
          value={customerDetails.zipCode}
        />
        <ButtonMedium displayText="Proceed to checkout" />
      </form>
    </div>
  );
};

export default CustomerDetails;
