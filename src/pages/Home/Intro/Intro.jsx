import React from "react";
import "./Intro.css";
import ButtonOrange from "../../../components/ButtonOrange/ButtonOrange";
import BackgroundShapesLeft from "../../../components/BackgroundShapes/BackgroundShapesLeft";
import PreTitle from "../../../components/PreTitle/PreTitle";
const Intro = () => {
  return (
    <section className="home_intro_section section">
      <BackgroundShapesLeft />
      <div className="home_intro_container container">
        <div className="home_intro_header">
          <PreTitle preTitle={"Hello, just an intro"} />
        </div>

        <div className="home_intro_contents">
          <h2 className="home_intro_title">
            <span> </span>Fullstack developer with a simple belief:{" "}
            <strong> "technology should make life easier, not harder"</strong>.
            I build complete applications—backend systems that power them and
            frontend experiences that people understand instantly. Every project
            is a chance to turn complexity into clarity.
          </h2>
          <div>
            <ButtonOrange text={"Get In Touch"} />
          </div>

          <div className="home_intro_content_details">
            <div className="home_intro_content_details_left">
              <h3>Bringing Ideas to Life</h3>
              <p>
                I obsess over the details—because that's what turns good design
                into great design. This care earns trust from stakeholders who
                know I treat their projects like my own.
              </p>
            </div>
            <div className="home_intro_content_details_right">
              <h3>Collaborate with me </h3>
              <p>
                Let’s create something extraordinary together! Whether you’re
                looking to visualize a product, animate a concept, or build an
                interactive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
