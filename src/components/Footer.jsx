import React from "react";
import SubscribeEmail from "./SubscribeEmail";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="bg-[#F9EFDB] pt-3 py-4 fixed bottom-0 w-full">
      <SubscribeEmail />
      <SocialMedia />
    </div>
  );
};

export default Footer;
