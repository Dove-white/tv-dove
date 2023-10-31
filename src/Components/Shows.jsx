import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Shows = () => {
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts?.slice(firstIndex, lastIndex);

  const nPage = Math.ceil((posts?.length || 0) / recordsPerPage); // Use Math.ceil to get the total pages
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="pt-10 pb-3">
        <h1 className="text-3xl px-5 font-sm md:px-14">Shows</h1>
      </div>
      <div className="flex justify-between flex-wrap gap-3 px-5 md:px-14">
        {records?.map((item) => (
          <div
            key={item.score}
            className="p-1 shadow-md flex flex-col gap-1 rounded-b-lg mb-10 hover:shadow-md hover:shadow-pink-300 transition-all group"
          >
            <Link to={"/" + item?.show.name.replace(" ", "")}>
              <img
                src={item?.show.image.medium}
                alt="tv-dove"
                className="w-[120px] lg:w-[140px] rounded-t-lg group-hover:rounded-b-lg transition-all cursor-pointer"
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
      <div className="flex justify-center items-center mb-2">
        <button
          className=" p-3  text-black mr-1 flex flex-row-reverse items-center group"
          onClick={prevPage}
        >
          Prev{" "}
          <AiOutlineArrowLeft className="h-10 w-10 text-pink-500 transition-all group-hover:-translate-x-1" />
        </button>

        <p className="h-6 w-6 bg-pink-500 text-white text-center">
          {currentPage}
        </p>
        <button
          className=" p-3  text-black flex items-center group"
          onClick={nextPage}
        >
          {" "}
          Next{" "}
          <AiOutlineArrowRight className="h-10 w-10 text-pink-500 transition-all group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
};

export default Shows;
