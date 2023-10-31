import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSistrix } from "react-icons/fa6";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-10 items-center">
        <Link to="/">
          <div className="bg-gradient-to-r from-pink-500 to-gray-500 relative w-[60px] h-[60px] rounded-full flex items-center justify-center group">
            <div className="absolute -left-[10px] -top-[5px] bg-pink-500 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white font-bold text__shadow-red group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all">
              TV
            </div>
            <div className="text__shadow-black font-serif font-bold text-white transition-all group-hover:translate-x-2">
              Dove
            </div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="text-black flex gap-3 font-[450]">
            <li className="relative group">
              <Link to="/">Shows</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
            </li>
            <li className="relative group">
              <Link to="/about">About Me</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
            </li>
            <li className="relative group">
              <Link to="/info">Info</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
            </li>
            <li className="relative group">
              <Link to="/about">Sing In</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
            </li>
            <li className="relative group">
              <Link to="/about">Log In</Link>
              <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
            </li>
          </ul>
        </nav>
        <div className="sm:flex hidden">
          <input
            type="search"
            name="search"
            id="0"
            placeholder="Search"
            className="rounded-l-lg w-26 outline-none p-[2px] pl-[4px] border border-black border-r-0 text-black"
          />
          <button className="bg-pink-500 hover:bg-pink-700 transition-all w-8 flex justify-center items-center rounded-r-lg">
            <FaSistrix className="text-white" />
          </button>
        </div>
        <div className="md:hidden">
          <FaBars className="text-pink-500 cursor-pointer text-xl" />
        </div>
      </div>
    </>
  );
};

export default Nav;
