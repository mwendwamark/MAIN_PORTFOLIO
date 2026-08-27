import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Primax.css";

const Primax = () => {
  const project = projectsData.find((p) => p.slug === "primax_family_dental");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Primax Family Dental needed a professional online presence that could convert visitors into booked appointments. Like many dental practices, the challenge was translating clinical credibility into a warm, approachable website that reduces patient anxiety and makes booking feel effortless.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A conversion-focused dental practice website with service showcases, appointment booking integration, practice location with Google Maps, contact form for patient enquiries, and SEO optimisation to capture local search traffic from nearby patients.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          The design used a clean, professional colour palette with calming tones to counteract dental anxiety. CSS animations were incorporated to add polish and guide user attention toward call-to-action elements. The layout was structured to answer the most common patient questions — services offered, location, and how to book — within seconds of landing.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          Built with React for a fast, interactive experience. CSS animations bring subtle motion to key elements. A responsive design ensures the site works perfectly on mobile, where most patients search for local dental services. Contact form and Google Maps integration make it easy for patients to reach the practice, while SEO and performance optimisation help the site rank and load quickly.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Form validation testing to ensure reliable enquiry submissions. Google Maps embed tested across devices for correct rendering. Responsive testing across mobile, tablet, and desktop. Performance profiling via Lighthouse to ensure fast load times. Cross-browser testing on Chrome, Safari, and Firefox.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Primax;
