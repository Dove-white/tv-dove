import "./index.css";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/UI/Nav";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import React, { useEffect, useState } from "react";
import MovieDetails from "./Components/MovieDetails";
import Brolly from "./Components/Pages/BrollyPage";
// import SimpleCalculator from "./Components/Pages/SimpleCalculator";
import VHome from "./Components/VideoLibrary/VHome";

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

  const [query, setQuery] = useState("");

  const inputSetQuery = (e) => setQuery(e.target.value);

  const movieData = posts?.filter((user) =>
    user.show.name.toLowerCase().includes(query) && user.show.id !== 67594
  );

  return (
    <>
      <Nav setQuery={inputSetQuery} />
      <Routes>
        <Route path="/tv-dove/" element={<HomePage movies={movieData} />} />
        <Route path="/tv-dove/about" element={<AboutPage />} />
        <Route path="/tv-dove/details/:id" element={<MovieDetails />} />
        <Route path="/tv-dove/privet" element={<Brolly />} />
        <Route path="/tv-dove/calculator" element={<VHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
