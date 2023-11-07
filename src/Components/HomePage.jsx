import React from "react";
import Shows from "./Shows";

const HomePage = ({ movies }) => {
  return (
    <>
      <div className="pt-10 pb-3">
        <h1 className="text-3xl px-5 font-sm md:px-14">Shows</h1>
      </div>
      <Shows movies={movies} />
    </>
  );
};

export default HomePage;
