import React, { useEffect, useState } from "react";
import SubscribeEmail from "./SubscribeEmail";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className={`bg-[#F9EFDB] pt-3 w-full`}>
      <SubscribeEmail />
      <SocialMedia />
    </div>
  );
};

export default Footer;
