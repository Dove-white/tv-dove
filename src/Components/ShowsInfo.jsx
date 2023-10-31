import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShowsInfo = (props) => {
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

  const showItems = posts?.slice(props.showIdStart, props.showIdEnd);
  return (
    <>
      {showItems?.map((item) => (
        <section key={item.score} className="mb-6">
          <div className="pt-10 pb-3 flex items-center gap-4">
            <h1 className="text-3xl px-5 font-sm md:px-14">
              {item?.show.name}
            </h1>
            <Link to="../">&#60; Back</Link>
          </div>
          <article className="px-5 md:px-14">
            <figure className="sm:flex gap-4 lg:gap-14">
              <div className="mb-6 sm:mb-10">
                <img
                  src={item?.show.image.original}
                  alt="tv-dove"
                  className="w-[250px] md:w-[300px]"
                />
                <div className="bg-pink-500 h-[30px] md:h-[50px] w-[250px] md:w-[300px] flex justify-center items-center">
                  <i className="hover:text-[red] cursor-pointer text-2xl md:text-3xl text-white">
                    <AiOutlineHeart />
                  </i>
                </div>
              </div>
              <div className="mb-5 sm:flex flex-col">
                <p className="font-[600] pr-2 mb-5 sm:text-lg  lg:mb-16">
                  {item?.show.summary
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .replace("<b>", "")
                    .replace("</b>", "")}
                </p>
                <figure className="self-end mr-2 lg:mr-8">
                  <h2 className="font-[600] text-lg mb-5 sm:text-2xl lg:text-3xl">
                    Share this on:
                  </h2>
                  <div>
                    <ul className="flex gap-2 lg:text-3xl">
                      <li>
                        <AiOutlineHeart className="hover:text-[red] cursor-pointer" />
                      </li>
                      <li>
                        <AiOutlineHeart className="hover:text-[red] cursor-pointer" />
                      </li>
                      <li>
                        <AiOutlineHeart className="hover:text-[red] cursor-pointer" />
                      </li>
                      <li>
                        <AiOutlineHeart className="hover:text-[red] cursor-pointer" />
                      </li>
                    </ul>
                  </div>
                </figure>
              </div>
            </figure>
            <figure className="bg-gray-400 mr-5 p-3 rounded-md md:w-1/2">
              <h2 className="font-[600] text-lg mb-5 sm:text-2xl lg:text-3xl">
                Show Info
              </h2>
              <ul className="font-[500] sm:text-lg lg:text-2xl">
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
                  Official site: <a href="" className="text-pink-500"></a>
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