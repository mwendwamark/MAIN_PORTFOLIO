import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Uga.css";

const Uga = () => {
  const project = projectsData.find((p) => p.slug === "utumishi_girls_academy");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Utumishi Girls Academy needed a strong digital presence to support Form 1 enrolment drives, showcase its 96% university transition rate, and communicate its academic credibility alongside the warmth of its community — all while appealing to both parents and prospective students in the competitive Kenyan private school market.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A full institutional website with dedicated sections for academics, admissions, facilities, and student life. The site needed to handle image-heavy content efficiently, support SEO for discoverability during enrolment seasons, and be fully responsive for parents browsing on mobile devices.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          The design direction centred on balancing academic professionalism with a welcoming, aspirational feel. A clean layout with strong photography was chosen to highlight the school's campus in Gilgil, Nakuru County, while structured navigation ensured parents could quickly find the information they needed about programmes and admissions.
        </p>
      ),
    },
    {
      id: "solution",
      content: (
        <p>
          Built with Next.js for server-side rendering and optimal image handling via next/image. The site includes Open Graph and Twitter meta tags for social sharing, SEO optimisation for search visibility, and a responsive design that adapts seamlessly from desktop to mobile — critical for reaching Kenyan parents who primarily browse on phones.
        </p>
      ),
      label: "Solution",
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Responsive testing across multiple device widths and browsers. Image optimisation verified to ensure fast loading on slower connections. SEO meta tags validated with social preview tools. Performance profiling done to ensure quick page loads during high-traffic enrolment periods.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Uga;
