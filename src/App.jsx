import "./index.css";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/UI/Nav";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import React, { useEffect, useState } from "react";
import MovieDetails from "./Components/MovieDetails";

function App() {
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
  const showId0 = posts?.slice(0, 1);
  const showId1 = posts?.slice(1, 2);
  const showId2 = posts?.slice(2, 3);
  const showId3 = posts?.slice(3, 4);
  const showId4 = posts?.slice(4, 5);
  const showId5 = posts?.slice(5, 6);
  const showId6 = posts?.slice(6, 7);
  const showId7 = posts?.slice(7, 8);
  const showId8 = posts?.slice(8, 9);
  const showId9 = posts?.slice(9, 10);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
