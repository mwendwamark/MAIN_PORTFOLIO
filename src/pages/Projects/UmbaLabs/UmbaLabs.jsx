import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./UmbaLabs.css";

const UmbaLabs = () => {
  const project = projectsData.find((p) => p.slug === "umba_labs");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Umba Labs needed a studio website that communicated its track record — 10+ products shipped — and positioned the brand around speed and craft for teams who need to ship without cutting corners. The challenge was building a site that itself demonstrated the quality and performance the studio promises to deliver.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A multi-section agency website with Home, About, Services, Projects, and Blog pages. The site needed a compelling video hero to immediately convey the studio's energy, a Request Quote flow for lead generation, and a design system that reflected the brand's technical sophistication.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          The design direction leaned into a dark, modern aesthetic with clean typography and generous whitespace — the kind of site that impresses other developers and technical decision-makers. A video hero was chosen to create immediate impact, while the information architecture was structured to guide visitors from capability discovery to quote request.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          Built with Next.js for optimal performance and structured page routing. The video hero loads efficiently with lazy loading. Responsive design ensures the site looks sharp on any screen. The overall experience is fast, minimal, and confident — a direct reflection of the studio's positioning.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Performance testing focused on video hero load times and overall page speed. Cross-browser testing on Chrome, Safari, and Firefox. Responsive testing across mobile, tablet, and desktop breakpoints. SEO validation for meta tags and structured data.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default UmbaLabs;
