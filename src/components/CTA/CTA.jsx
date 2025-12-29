import React from "react";
import "./CTA.css";
import ButtonPri from "../ButtonPri/ButtonPri";
import img from "../../assets/img.avif";

const CTA = () => {
  return (
    <section className="CTA_section large_container">
      <div className="CTA_section_container">
        <div className="CTA_section_contents">
          <div className="CTA_section_cl">
            <h2 className="CTA_section_header">Stay connected</h2>
            <a href="mailto:ntheimk@gmail.com" className="CTA_section_email">
              ntheimk@gmail.com
            </a>
            <p className="CTA_section_text">
              Crafted with creativity and passion. Let's stay connected reach
              out anytime!
            </p>

            <div className="CTA_button_wrapper">
              <ButtonPri text="Contact Now" />
            </div>
          </div>
          <div className="CTA_section_cr">
            <img src={img} alt="Mark Mwendwa Nthei" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
