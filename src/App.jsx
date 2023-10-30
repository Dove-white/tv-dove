import "./index.css";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/UI/Nav";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
