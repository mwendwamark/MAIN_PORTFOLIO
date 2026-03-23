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
import Dental360 from "./pages/Projects/360Dental/360Dental";
import Kejaconnect from "./pages/Projects/KejaConnect/Kejaconnect";
import Kilimolink from "./pages/Projects/KilimoLink/Kilimolink";
import LiquorChapchap from "./pages/Projects/LiquorChapchap/LiquorChapchap";
import Grwc from "./pages/Projects/GRWC/Grwc";
import Moriah from "./pages/Projects/Moriah/Moriah";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/projects/360_dental" element={<Dental360 />} />
          <Route path="/projects/keja_connect" element={<Kejaconnect />} />
          <Route path="/projects/kilimo_link" element={<Kilimolink />} />
          <Route path="/projects/liquor_chapchap" element={<LiquorChapchap />} />
          <Route path="/projects/grwc" element={<Grwc />} />
          <Route path="/projects/moriah" element={<Moriah />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
