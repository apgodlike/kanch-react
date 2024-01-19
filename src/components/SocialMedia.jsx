import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMedia = () => {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-600 py-3">FOLLOW US OUT THERE</p>
      <div className="flex justify-center gap-5 pb-5">
        <div className="cursor-pointer">
          <FacebookIcon />
        </div>
        <div className="cursor-pointer">
          <TwitterIcon />
        </div>
        <div className="cursor-pointer">
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
