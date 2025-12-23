import React from "react";
import "./Components.css"

const SecondaryBtn = ({btnText, onClick}) => {
  return (
    <button className="sec_custom_action_btn" onClick={onClick}>
      <div className="sec_icon_circle">
        <i class="ri-arrow-right-line" style={{ fontSize: "1rem" }}></i>{" "}
      </div>
      <span className="sec_btn_label">{btnText}</span>
    </button>
  );
};

export default SecondaryBtn;
