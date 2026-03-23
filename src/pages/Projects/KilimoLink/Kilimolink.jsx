import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Kilimolink.css";

const Kilimolink = () => {
  const project = projectsData.find((p) => p.slug === "kilimo_link");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Kenya's agricultural supply chain is deeply inefficient. Middlemen take 60–80% of the margin, leaving farmers with a fraction of the consumer price.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A dual-sided marketplace with produce listings for farmers, buyer discovery, price comparison, and direct M-Pesa integrated payments.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Early interviews with farmers in Kiambu revealed a deep distrust for complex apps. The solution was an SMS-friendly fallback and an incredibly simple listing flow.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          Farmers create produce listings specifying quantity, price, and location. Buyers browse, compare, and place orders with seamless M-Pesa integration for secure, direct payment.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Field-tested with real farmers. Accessibility was rigorously tested for low-end Android devices commonly used in rural areas. A Lighthouse audit run on a 3G simulation scored highly.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Kilimolink;