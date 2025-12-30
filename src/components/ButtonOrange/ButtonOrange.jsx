import React from "react";
import "./ButtonOrange.css";
import { Link } from "react-router-dom";

const ButtonOrange = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to} className="btn_orange">
        <span className="spn_orange">{text}</span>
      </Link>
    );
  }
  return (
    <button className="btn_orange">
      <span className="spn_orange">{text}</span>
    </button>
  );
};

export default ButtonOrange;
