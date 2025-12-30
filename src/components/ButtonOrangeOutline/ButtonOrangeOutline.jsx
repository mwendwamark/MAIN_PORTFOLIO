import React from "react";
import "./ButtonOrangeOutline.css";
import { Link } from "react-router-dom";

const ButtonOrangeOutline = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to} className="btn_orange_outline">
        <span className="spn_orange_outline">{text}</span>
      </Link>
    );
  }
  return (
    <button className="btn_orange_outline">
      <span className="spn_orange_outline">{text}</span>
    </button>
  );
};

export default ButtonOrangeOutline;
