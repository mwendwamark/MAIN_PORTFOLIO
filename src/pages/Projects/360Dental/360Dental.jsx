import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./360Dental.css";

const Dental360 = () => {
  const project = projectsData.find((p) => p.slug === "360_dental");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          The practice essentially had no website; potential patients were only finding them through word-of-mouth recommendations. In turn, they lacked the ability to showcase specific services and accept online bookings securely.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A single-site web design focusing on a conversion-heavy homepage layout, services detail page, 'About Us' section, and comprehensive contact pages boasting appointment request forms and location maps.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Established a clean standard clinical aesthetic matching the dental industry, prioritizing a blue and white palette to actively signal hygiene and trust. Direct CTAs were intentionally pushed above the fold.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          A customized React website engineered with swift appointment request forms, visual services showcase, and deeply embedded map tools. The resulting platform relies on fast load times utilizing code splitting and image optimization.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Comprehensive form submission testing to verify patient endpoints. Evaluated via Lighthouse scores (achieving 90+ on mobile accessibility), rigorous cross-browser validations, and contrast checks against key guidelines.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Dental360;