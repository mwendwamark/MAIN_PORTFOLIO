import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CTA from "./components/CTA/CTA";
import BackgroundShapesLeft from "./components/BackgroundShapes/BackgroundShapesLeft";
import BackgroundShapesRight from "./components/BackgroundShapes/BackgroundShapesRight";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
