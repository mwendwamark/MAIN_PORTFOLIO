import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./TurfsKe.css";

const TurfsKe = () => {
  const project = projectsData.find((p) => p.slug === "TurfsKe");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Football fans in Kenya struggle to find and book local football pitches. Information about available turfs — including location, pricing, and availability — is scattered across social media groups and word-of-mouth, making it difficult to organise recreational games efficiently.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A sports platform that connects football fans with local football pitches. Core features include a searchable directory of turfs, location-based discovery with map integration, availability and pricing information, and a streamlined booking flow designed for quick, mobile-first interactions.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          The design prioritised a sports-oriented visual language — bold colours, dynamic layouts, and energetic imagery. An interactive map was chosen as a secondary discovery method alongside a card-based grid, since users often search by proximity. CSS animations were used to add motion and energy without sacrificing performance.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          Built with Next.js for fast page loads and SEO. Google Maps embed integration lets users see nearby pitches at a glance. CSS animations bring the interface to life, while a fully responsive design ensures the experience works smoothly on any device. Performance optimisation keeps the site fast even on slower mobile connections.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Device responsive testing across major screen sizes. Map integration tested for correct location rendering and interaction. Animation performance profiled to ensure smooth 60fps rendering on mid-range devices. Lighthouse audits conducted to verify performance and SEO scores.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default TurfsKe;
