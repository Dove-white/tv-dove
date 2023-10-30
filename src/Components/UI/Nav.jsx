import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSistrix } from "react-icons/fa6";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-10 items-center bg-gradient-to-r from-pink-500 to-gray-500">
        <Link to="/">
          <div className="bg-[#c1c1c1] relative w-[60px] h-[60px] rounded-full flex items-center justify-center group">
            <div className="absolute -left-[10px] -top-[5px] bg-[#c1c1c1] w-[30px] h-[30px] rounded-full flex items-center justify-center text-white font-bold text__shadow-red">
              TV
            </div>
            <div className="text__shadow-black font-serif font-bold text-white group-hover:text-pink-500 transition-all">
              Dove
            </div>
          </div>
        </Link>

        <nav className="hidden sm:block">
          <ul className="text-white flex gap-3">
            <li className="relative group">
              <Link to="/">Home</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-white z-10 transition-all"></span>
            </li>
            <li className="relative group">
              <Link to="/about">About Me</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-white z-10 transition-all"></span>
            </li>
          </ul>
        </nav>
        <div className="sm:flex hidden">
          <input
            type="search"
            name="search"
            id="0"
            className="rounded-l-lg w-26 outline-none p-[2px] pl-[4px]"
          />
          <button className="bg-pink-500 w-8 flex justify-center items-center rounded-r-lg">
            <FaSistrix className="text-white" />
          </button>
        </div>
        <div className="sm:hidden">
          <FaBars className="text-white text-xl" />
        </div>
      </div>
    </>
  );
};

export default Nav;
