import React from "react";
import "./ButtonPri.css";

import { Link } from "react-router-dom";

const ButtonPri = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to} className="btn2">
        <span className="spn2">{text}</span>
      </Link>
    );
  }
  return (
    <button className="btn2">
      <span className="spn2">{text}</span>
    </button>
  );
};

export default ButtonPri;
