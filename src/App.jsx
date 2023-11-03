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

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/tv-dove/" element={<HomePage />} />
        <Route path="/tv-dove/about" element={<AboutPage />} />
        <Route path="/tv-dove/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
