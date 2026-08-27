import React from "react";
import "./ProjectsHero.css";
import projectsBackground from "../../../assets/background1.webp";
import { ArrowDown } from "@phosphor-icons/react";

const ProjectsHero = () => {
  return (
    <section
      className="projects_hero_section"
      style={{ backgroundImage: `url(${projectsBackground})` }}
    >
      <div className="projects_hero_overlay"></div>
      <div className="projects_hero_container container">
        <div className="projects_hero_content">
          <div className="projects_hero_left">
            <h1 className="projects_hero_title">
              Projects<span className="projects_hero_asterisk">*</span>
            </h1>
          </div>
          <div className="projects_hero_right">
            <p className="projects_hero_desc">
              Explore my portfolio of web development and software engineering projects, 
              ranging from custom e-commerce solutions to community platforms and agency sites.
            </p>
            <div className="projects_hero_scroll">
              <ArrowDown size={32} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
