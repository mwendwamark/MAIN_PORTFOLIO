import React from "react";
import "./Components.css";

const PreTitle = ({ text }) => {
  return (
    <div className="pre_title">
      <span className="pre_title_icon" aria-hidden="true"></span>
      <span className="pre_title_text">{text}</span>
    </div>
  );
};

export default PreTitle;
