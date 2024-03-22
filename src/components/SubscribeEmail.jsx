import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import axios from "axios";

const SubscribeEmail = () => {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  async function handleClick() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/newsletter`,
        { email: email },
        { headers: { "Content-Type": "application/json" } }
      );
      const responseBody = response.data;
      setEmail("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center pb-2 max-w-md md:max-w-xl mx-auto">
      <h3 className="text-gray-700 text-2xl py-2">Subscribe to our emails</h3>
      <p className="text-xs text-gray-600">
        Subscribe to our mailing list to receive our latest updates!
      </p>
      <div className="w-full px-10">
        <div className="my-3 flex justify-between items-center border border-[#9DBC98] rounded-md">
          <input
            className="m-1 w-full bg-transparent outline-none"
            placeholder="email"
            onChange={handleChange}
            value={email}
          />
          <div onClick={handleClick} className="cursor-pointer opacity-70">
            <TrendingFlatIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
