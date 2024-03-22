import React, { useEffect, useState } from "react";
import ButtonMedium from "./ButtonMedium";
import InputField from "./InputField";
import axios from "axios";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });
  const [displaySubmittedMessage, setDisplaySubmittedMessage] = useState(false);

  function handleChange(e) {
    setContactForm((prevValue) => {
      const id = e.target.id;
      const value = e.target.value;
      return { ...prevValue, [id]: value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/contactus`,
        contactForm,
        { headers: { "Content-Type": "application/json" } }
      );
      const responseBody = response.data;
      setDisplaySubmittedMessage(true);
      setTimeout(() => {
        setDisplaySubmittedMessage(false);
      }, 5000);
      setContactForm({
        name: "",
        email: "",
        phoneNumber: "",
        comment: "",
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {}, [contactForm]);

  return (
    <div className="flex flex-col md:mx-auto md:w-10/12 m-10">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 flex-col mx-2 items-center"
      >
        <p className="m-1.5 w-full max-w-md md:max-w-xl text-xl md:text-2xl">
          Reach Out!
        </p>
        <InputField
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          displayText="Name"
          value={contactForm.name}
        />
        <InputField
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          displayText="Email*"
          value={contactForm.email}
        />
        <InputField
          onChange={handleChange}
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          displayText="Phone Number"
          value={contactForm.phoneNumber}
        />
        <div className="my-0.5 relative border border-solid border-[#9DBC98] w-full p-1.5 rounded-md max-w-md md:max-w-xl">
          <label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              className="peer bg-transparent w-full focus:outline-none h-24"
              placeholder=""
              onChange={(e) => {
                setContactForm((prevValue) => {
                  return { ...prevValue, comment: e.target.value };
                });
              }}
              value={contactForm.comment}
            ></textarea>
            <span
              className={`absolute left-2 ${
                contactForm.comment == ""
                  ? "peer-focus:border peer-focus:border-[#9DBC98] peer-focus:bg-[#fff6e0] peer-focus:border-y-0 peer-focus:border-x-2 transition ease-in-out peer-focus:text-xs peer-focus:translate-x-0 peer-focus:-translate-y-3 peer-focus:px-2"
                  : "border border-[#9DBC98] bg-[#fff6e0] border-y-0 border-x-2 transition ease-in-out text-xs translate-x-0 -translate-y-3 px-2"
              }`}
            >
              Comment
            </span>
          </label>
        </div>
        <div className="m-1.5 w-full max-w-md md:max-w-xl">
          <ButtonMedium type="submit" displayText="Send" />
        </div>
        {displaySubmittedMessage && (
          <p>Submitted. We will get back to you shortly. Thank you</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
