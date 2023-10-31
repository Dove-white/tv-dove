import "./index.css";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/UI/Nav";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ShowId0 from "./Components/UI/AllShowsInfo/ShowId0";
import React, { useEffect, useState } from "react";
import ShowId1 from "./Components/UI/AllShowsInfo/ShowId1";
import ShowId2 from "./Components/UI/AllShowsInfo/ShowId2";
import ShowId3 from "./Components/UI/AllShowsInfo/ShowId3";
import ShowId4 from "./Components/UI/AllShowsInfo/ShowId4";
import ShowId5 from "./Components/UI/AllShowsInfo/ShowId5";
import ShowId6 from "./Components/UI/AllShowsInfo/ShowId6";
import ShowId7 from "./Components/UI/AllShowsInfo/ShowId7";
import ShowId8 from "./Components/UI/AllShowsInfo/ShowId8";
import ShowId9 from "./Components/UI/AllShowsInfo/ShowId9";

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
        <Route>
          {showId0?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId0 />}
            />
          ))}
          {showId1?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId1 />}
            />
          ))}
          {showId2?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId2 />}
            />
          ))}
          {showId3?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId3 />}
            />
          ))}
          {showId4?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId4 />}
            />
          ))}
          {showId5?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId5 />}
            />
          ))}
          {showId6?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId6 />}
            />
          ))}
          {showId7?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId7 />}
            />
          ))}
          {showId8?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId8 />}
            />
          ))}
          {showId9?.map((item) => (
            <Route
              key={item.score}
              path={"/" + item?.show.name.replace(" ", "")}
              element={<ShowId9 />}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
