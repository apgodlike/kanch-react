import React, { useEffect, useRef, useState } from "react";
import Palette from "@mui/icons-material/Palette";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  //   const searchRef = useRef(null);

  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       if (searchRef && searchRef.current.contains(e.target)) {
  //         setSearchActive(false);
  //       }
  //     };
  //     document.addEventListener("click", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, []);

  //   function handleSearchBoxClick(e) {
  //     e.stopPropagation();
  //   }

  return (
    <div>
      <div className="bg-[#F9EFDB] flex justify-between px-5 py-3 items-center">
        <div className="flex text-xl items-center">
          <Palette className="" />
          <h1 className="ml-5 text-3xl text-gray-900">Anna Kash</h1>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setSearchActive(!searchActive)}
        >
          <Search />
        </div>
      </div>
      <ul className="mx-auto flex flex-col items-center gap-2 md:flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      {searchActive && (
        <div
          //   ref={searchRef}
          //   onClick={handleSearchBoxClick}
          className="flex justify-between items-center w-full p-1 px-2 border border-solid border-[#EBD9B4] rounded-lg"
        >
          <input className="p-1 w-full" placeholder="Please enter keyword" />
          <Search className="ml-2" />
        </div>
      )}
    </div>
  );
};

export default Header;
