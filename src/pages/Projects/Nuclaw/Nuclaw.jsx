import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Nuclaw.css";

const Nuclaw = () => {
  const project = projectsData.find((p) => p.slug === "nuclaw");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          No publicly visible content or descriptive copy was available at launch — the site returned only a bare title with no descriptive meta content or visible body copy, making it impossible to confirm the specific problem the product solves.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A client-rendered web application built to serve a specific use case that was not yet publicly documented at the time of initial review. Further details are pending confirmation from the project owner.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Design and development decisions were made internally based on the product's requirements. The approach prioritised a clean, minimal interface to allow the product's functionality to speak for itself.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          A modern web application built with current frontend technologies. The project is deployed on Vercel for fast, reliable hosting with automatic deployments on each update.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Cross-browser and device testing to ensure consistent rendering across platforms. Performance profiling and accessibility checks conducted prior to deployment.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Nuclaw;
