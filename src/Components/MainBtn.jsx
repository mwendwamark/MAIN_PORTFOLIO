import React from "react";
import "./Components.css";

const MainBtn = ({ btnText, onClick }) => {
  return (
    <button className="custom_action_btn" onClick={onClick}>
      <div className="icon_circle">
        <i class="ri-arrow-right-line" style={{ fontSize: "1rem" }}></i>{" "}
      </div>
      <span className="btn_label">{btnText}</span>
    </button>
  );
};

export default MainBtn;
