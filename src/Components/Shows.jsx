import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Shows = ({ movies }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = movies?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((movies?.length || 0) / recordsPerPage); // Use Math.ceil to get the total pages
  const numbers = Array.from({ length: nPage }, (_, index) => index + 1);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    //flex justify-center md:justify-between flex-wrap
    <>
      <div className="flex flex-wrap justify-center sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-16 px-5 md:px-14">
        {records?.map((item) => (
          <div
            key={item.show.id}
            className="p-1 shadow-md flex flex-col gap-1 rounded-b-lg mb-10 hover:shadow-md hover:shadow-pink-300 transition-all group"
          >
            <Link to={`/tv-dove/details/${item?.show.id}`}>
              <img
                src={item?.show.image.medium}
                alt="tv-dove"
                className="sm:w-full rounded-t-lg group-hover:rounded-b-lg transition-all cursor-pointer"
              />
            </Link>
            <p className="h-10 text-center">{item?.show.name}</p>
            <div className="flex justify-evenly items-center">
              <i className="hover:text-[red] cursor-pointer">
                <AiOutlineHeart />
              </i>
              <i className="flex items-center cursor-pointer">
                <AiOutlineStar className="hover:text-[red]" /> 6.5
              </i>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-2 ease-in duration-300">
        <button
          className=" p-3  text-black mr-1 flex flex-row-reverse items-center group"
          onClick={prevPage}
        >
          Prev{" "}
          <AiOutlineArrowLeft className="h-8 w-8 text-pink-500 transition-all group-hover:-translate-x-1" />
        </button>
        {numbers?.map((num, index) => (
          <button
            key={index}
            onClick={() => changeCPage(num)}
            className={
              currentPage === index + 1
                ? "h-6 w-6 bg-pink-500 text-white text-center"
                : "h-6 w-6 bg-gradient-to-r from-gray-300 to-gray-500 text-black text-center"
            }
          >
            {num}
          </button>
        ))}
        <button
          className=" p-3  text-black flex items-center group"
          onClick={nextPage}
        >
          {" "}
          Next{" "}
          <AiOutlineArrowRight className="h-8 w-8 text-pink-500 transition-all group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
};

export default Shows;
