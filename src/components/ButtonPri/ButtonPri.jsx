import React from "react";
import "./ButtonPri.css";

const ButtonPri = ({ text }) => {
  return (
    <button className="btn2">
      <span className="spn2">{text}</span>
    </button>
  );
};

export default ButtonPri;
