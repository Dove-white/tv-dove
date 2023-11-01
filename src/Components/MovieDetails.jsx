import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowsInfo from "./ShowsInfo";

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();
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
        setMovies(data);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, []);

  const movie = movies?.filter((item) => item.show.id === Number(id));

  return <ShowsInfo movies={movie} />;
};

export default MovieDetails;
