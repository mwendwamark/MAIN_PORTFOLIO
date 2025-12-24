import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CustomCursor from "./Components/CustomCursor";
import HomeHero from "./Pages/Home/HomeHero/HomeHero";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeHero />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
