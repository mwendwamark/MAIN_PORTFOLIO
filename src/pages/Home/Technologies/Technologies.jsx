import React from "react";
import "./Technologies.css";
import Marquee from "react-fast-marquee";
import TechnologiesData from "./TechnologiesData";
import PreTitle from "../../../components/PreTitle/PreTitle";

const Technologies = () => {
  return (
    <section className="home_tech_section section">
      <div className="home_tech_container container">
        <div className="home_tech_contents">
          <div className="home_tech_headers">
            <PreTitle preTitle={"What i am proficient in"} />
            <h2 className="home_tech_title">Technologies</h2>
          </div>
          <p className="home_tech_desc">
            I have extensive experience working with modern web technologies and tools. 
            From frontend frameworks to cloud services, I leverage the best tools to 
            build scalable, performant, and user-friendly applications that solve real-world problems.
          </p>
        </div>
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={true}
          direction="left"
          className="home_tech_marquee"
        >
          {TechnologiesData.map((tech, index) => (
            <div className="tech_card" key={index}>
              <div className="tech_icon">{tech.techIcon}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Technologies;