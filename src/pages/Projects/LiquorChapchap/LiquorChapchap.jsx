import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./LiquorChapchap.css";

const LiquorChapchap = () => {
  const project = projectsData.find((p) => p.slug === "liquor_chapchap");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          There are no reliable drinks delivery platforms in Nairobi; existing options have terrible UX and frustrating checkout experiences, ruining the spontaneity of an event.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A fast and minimal mobile-first e-commerce app with a product catalogue, persistent cart, swift checkout process, order tracking, and an admin dashboard for order processing.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          A competitor audit revealed cluttered UIs. I decided to prioritize minimal clicks, speed, and persistent carts, allowing users to rapidly browse products on a single page.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          A grid-based product catalogue with efficient category filtering, an intuitive cart drawer overlay, and an M-Pesa STK push checkout process ensuring seamless friction-less payments.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Cart persistence was actively tested across sessions. Safaricom's M-Pesa Sandbox API ensured robust payment flows. Finally, the site was run on common Kenyan Android handsets to verify performance.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default LiquorChapchap;