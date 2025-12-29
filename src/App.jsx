import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CTA from "./components/CTA/CTA";
import BackgroundShapesLeft from "./components/BackgroundShapes/BackgroundShapesLeft";
import BackgroundShapesRight from "./components/BackgroundShapes/BackgroundShapesRight";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        {/* <BackgroundShapesLeft /> */}
        <Navbar />
        <Routes></Routes>
        {/* <CTA /> */}
        <BackgroundShapesRight />
      </div>
    </BrowserRouter>
  );
};

export default App;
