import React from "react";
import "./ButtonBlack.css";
import { Link } from "react-router-dom";

const ButtonBlack = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to} className="btn_black">
        <span className="spn_black">{text}</span>
      </Link>
    );
  }
  return (
    <button className="btn_black">
      <span className="spn_black">{text}</span>
    </button>
  );
};

export default ButtonBlack;
