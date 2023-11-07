import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSistrix, FaXmark } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";

const reloadPage = () => {
  return location.reload();
};

const Nav = (props) => {
  const [posts, setPosts] = useState(null);
  const url = "https://api.tvmaze.com/search/shows?q=girls";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between py-5 px-10 items-center">
        <Link to="/tv-dove/">
          <div className="bg-gradient-to-r from-pink-500 to-gray-500 relative w-[60px] h-[60px] rounded-full flex items-center justify-center group">
            <div className="absolute -left-[10px] -top-[5px] bg-pink-500 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white font-bold text__shadow-red group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all">
              TV
            </div>
            <div className="text__shadow-black font-serif font-bold text-white transition-all group-hover:translate-x-2">
              Dove
            </div>
          </div>
        </Link>
        <div className="mr-20 md:hidden">
          <BiSearch
            id="nav-normal"
            className="text-pink-500 cursor-pointer text-xl"
          />
        </div>
        <input type="checkbox" className="hidden" id="check" />
        <label
          id="nav-icons"
          htmlFor="check"
          className="absolute inline-flex top-10 right-8 md:hidden"
        >
          <FaBars
            id="nav-normal"
            className="text-pink-500 cursor-pointer text-xl"
          />
          <FaXmark
            id="nav-closed"
            className="text-pink-500 cursor-pointer text-xl hidden"
          />
        </label>
        <nav
          onClick={reloadPage}
          id="nav-list"
          className="text-black flex flex-col items-center gap-3 font-[450] absolute w-[100vw] h-[0] py-0 md:static md:w-auto md:h-auto md:flex-row md:to-white md:justify-between overflow-hidden transition-all bg-gradient-to-b from-white to-pink-500 top-24 left-0"
        >
          <li className="list-none relative group">
            <Link to="/tv-dove/">Shows</Link>
            <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/tv-dove/about">About Me</Link>
            <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/tv-dove/about">Info</Link>
            <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/tv-dove/about">My Contact</Link>
            <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
          </li>
          <li className="list-none relative group">
            <Link to="/tv-dove/">Site</Link>
            <span className="absolute left-0 -bottom-[1px] w-0 group-hover:w-[100%] h-[2px] rounded-sm bg-gradient-to-r from-pink-500 to-gray-500 z-10 transition-all"></span>
          </li>
        </nav>
        <div className="hidden md:flex">
          <input
            type="search"
            name="search"
            id="0"
            placeholder="Search"
            className="rounded-l-lg w-26 outline-none p-[2px] pl-[4px] border border-black border-r-0 text-black"
            onChange={props.setQuery}
          />
          <button className="bg-pink-500 hover:bg-pink-700 transition-all w-8 flex justify-center items-center rounded-r-lg">
            <FaSistrix className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
