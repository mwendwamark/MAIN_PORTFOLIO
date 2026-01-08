import React from "react";
import "./Hero.css";
import img from "../../../assets/me.avif";

const Hero = () => {
  return (
    <section className="home_hero_section">
      <div className="home_hero_bg">
        <img src={img} alt="Mwendwa - Full Stack Developer" />
      </div>
      <div className="home_hero_overlay"></div>

      <div className="home_hero_content container">
        <div className="home_hero_headers">
          <div className="home_hero_badge">
            <span className="dot"></span> Full Stack Developer
          </div>
          <h1 className="home_hero_title">
            Nthei<span className="star">*</span>
          </h1>
        </div>
        <p className="home_hero_description">
          Strategic design that drives growth, not just looks good. I create
          everything your brand needs to attract customers and turn them into
          sales.
        </p>
      </div>
    </section>
  );
};

export default Hero;
