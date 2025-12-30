import React from "react";
import "./ButtonWhiteOutline.css";
import { Link } from "react-router-dom";

const ButtonWhiteOutline = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to} className="btn_white_outline">
        <span className="spn_white_outline">{text}</span>
      </Link>
    );
  }
  return (
    <button className="btn_white_outline">
      <span className="spn_white_outline">{text}</span>
    </button>
  );
};

export default ButtonWhiteOutline;
