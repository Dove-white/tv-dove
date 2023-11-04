import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaSquareTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const ShowsInfo = ({ movies }) => {
  return (
    <>
      {movies?.map((item) => (
        <section key={item.score} className="mb-6">
          <div className="pt-10 pb-3 flex items-center gap-4">
            <h1 className="text-3xl px-5 font-sm md:px-14">
              {item?.show.name}
            </h1>
            <Link to="../tv-dove/">&#60; Back</Link>
          </div>
          <article className="px-5 md:px-14 lg:flex lg:gap-10">
            <figure className="sm:flex gap-4 lg:gap-10">
              <div className="mb-6 sm:mb-10 lg:mb-0 group transition-all icon__group">
                <img
                  src={item?.show.image.original}
                  alt="tv-dove"
                  className="w-[250px]"
                />
                <div className="bg-pink-500 h-[30px] md:h-[50px] w-[250px] flex justify-center items-center md:group-hover:-translate-y-[50px] group-hover:-translate-y-[30px] transition-all icon__pink-gradient">
                  <i className="hover:text-[red] cursor-pointer text-2xl md:text-3xl text-white">
                    <AiOutlineHeart />
                  </i>
                </div>
              </div>
              <div className="mb-5 sm:flex flex-col w-auto  lg:mb-0">
                <p className="font-[600] pr-2 mb-5 lg:mb-5">
                  {item?.show.summary}
                </p>
                <figure className="self-end mr-2 lg:mr-8">
                  <h2 className="font-[600] text-lg mb-5">Share this on:</h2>
                  <div>
                    <ul className="flex gap-2 lg:text-3xl">
                      <li>
                        <FaFacebookF className="hover:text-[blue] cursor-pointer" />
                      </li>
                      <li>
                        <FaWhatsapp className="hover:text-[green] cursor-pointer" />
                      </li>
                      <li>
                        <FaSquareTwitter className="hover:text-[blue] cursor-pointer" />
                      </li>
                      <li>
                        <FaYoutube className="hover:text-[red] cursor-pointer" />
                      </li>
                    </ul>
                  </div>
                </figure>
              </div>
            </figure>
            <figure className="bg-gradient-to-r from-gray-300 to-gray-500 border-2 border-pink-500 mr-5 p-3 rounded-md md:w-1/2 lg:w-auto">
              <h2 className="font-[600] text-lg mb-5">Show Info</h2>
              <ul className="font-[500]">
                <li>
                  Network:{" "}
                  <span className="font-[400] pl-[5px]">
                    {" "}
                    <a href="" className="pr-[5px] text-pink-500"></a>
                    &#40; 2023 - now &#41;
                  </span>
                </li>
                <li>
                  Schedule:
                  <span className="font-[400] pl-[5px]">
                    {item?.show.schedule.days} at {item?.show.schedule.time}
                    &#40; &#126;59 min &#41;
                  </span>
                </li>
                <li>
                  Status:
                  <span className="font-[400] pl-[5px]">
                    {item?.show.status}
                  </span>
                </li>
                <li>
                  Show Type:{" "}
                  <span className="font-[400]">{item?.show.type}</span>
                </li>
                <li>
                  Genres:{" "}
                  <span className="font-[400]">{item?.show.genres},</span>
                </li>
                <li>
                  Language:
                  <span className="font-[400] pl-[5px]">
                    {item?.show.language}
                  </span>
                </li>
                <li>
                  Official site:{" "}
                  <Link to="/tv-dove/privet" className="text-pink-500">
                    brolly
                  </Link>
                </li>
              </ul>
            </figure>
          </article>
        </section>
      ))}
    </>
  );
};

export default ShowsInfo;
