import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleOffMenuBar() {
    setMenuToggle(false);
  }
  const menuList = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "Catagery",
      path: "/",
    },
    {
      id: 4,
      name: "Products",
      path: "/",
    },
    {
      id: 5,
      name: "About",
      path: "/",
    },
    {
      id: 6,
      name: "Contact Us",
      path: "/contactus",
    },
  ];

  return (
    <div>
      <div className="relative bg-[#F9EFDB] flex justify-between px-5 py-3 items-center pt-7">
        <div className="flex text-xl items-center">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            {menuToggle ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <Link
          className="ml-5 text-3xl text-gray-900"
          to="/"
          onClick={toggleOffMenuBar}
        >
          Anna Kash
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => setSearchActive(!searchActive)}
        >
          <Search />
        </div>
      </div>
      <div
        className={`${
          !menuToggle && "hidden"
        } absolute w-full h-full opacity-50 bg-[#ffefc3] z-10 md:hidden`}
        onClick={toggleOffMenuBar}
      ></div>
      <ul
        className={` mx-auto ${
          menuToggle ? "flex absolute" : "hidden"
        } md:flex transition-all z-20 ease-in-out duration-1000 delay-500 flex-col gap-2 md:flex-row bg-[#F9EFDB] pt-5 p-2 w-10/12 md:w-full h-screen md:h-auto md:justify-center mb-2`}
      >
        {menuList.map((item) => {
          return (
            <li id={item.id} key={item.id} className="w-full md:w-auto">
              <Link
                className="hover:bg-[#EBD9B4] h-10 w-full mx-auto px-5 py-0.5 flex justify-center items-center md:rounded-lg md:w-auto"
                to={item.path}
                onClick={toggleOffMenuBar}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {searchActive && (
        <div className="flex justify-between items-center w-full p-1 px-2 border border-solid border-[#EBD9B4] rounded-lg">
          <input className="p-1 w-full" placeholder="Please enter keyword" />
          <Search className="ml-2" />
        </div>
      )}
    </div>
  );
};

export default Header;
