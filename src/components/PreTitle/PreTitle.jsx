import React from "react";
import "./PreTitle.css"
const PreTitle = ({ preTitle }) => {
  return (
    <div className="pre_title">
      <strong className="pre_title_text">{preTitle}</strong>
    </div>
  );
};

export default PreTitle;
