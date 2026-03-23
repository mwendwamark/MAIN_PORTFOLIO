import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Grwc.css";

const Grwc = () => {
  const project = projectsData.find((p) => p.slug === "grwc");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          The church had absolutely no online presence. Members relied purely on WhatsApp for service times and announcements. Furthermore, they lacked a platform to organically reach new visitors online.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A welcoming homepage with a hero/CTA, a services and events page, a dedicated sermons archive, an 'About Us' section, and a contact form with Google Maps alongside an integrated CMS.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Through mood board exploration, I chose a clean and light aesthetic over conventional dark church stereotypes. The goal was to ensure the digital environment felt open to first-time visitors.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          I utilized a React frontend coupled with a Headless CMS backend. Church staff were thoroughly trained on the CMS to independently update content. SEO and structured data were added to aid local search.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Conducted extensive cross-browser and cross-device testing. Contact forms were tested end-to-end to prevent email failure. Page speeds were optimized via image compression and lazy loading.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Grwc;