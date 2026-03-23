import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Moriah.css";

const Moriah = () => {
  const project = projectsData.find((p) => p.slug === "moriah");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Moriah Chicken Grill strictly operated offline causing hungry customers to manually call the store simply to know the menu or specific geographical location.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          An enticing homepage leading directly to a rich menu page that utilizes category filtering. Additionally, a story background section with specific direct contact parameters to make driving there simpler.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Leveraging a warmer color palette — specifically deep charcoal and amber — to naturally complement the high-quality grilled food photography. The design was prioritized mobile-first to account for average Nairobi food web-browsers.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          An immersive React-based site populated with a categorised menu component seamlessly leading users. Emphasizes an animated hero sequence, comprehensive food galleries, and dedicated contact integration supporting embedded Google Maps.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Device responsive testing covering multiple major pixel widths. Utilized WebP formatted imagery for drastic performance leaps regarding bandwidth and form validation loops verified against false input parameters.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Moriah;