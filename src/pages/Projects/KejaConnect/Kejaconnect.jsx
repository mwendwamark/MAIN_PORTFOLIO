import React from "react";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projectsData } from "../../../data/projectsData";
import "./Kejaconnect.css";

const Kejaconnect = () => {
  const project = projectsData.find((p) => p.slug === "keja_connect");

  const sections = [
    {
      id: "problem",
      label: "Problem",
      content: (
        <p>
          Finding student housing near Kenyan universities is chaotic. Listings are scattered across WhatsApp groups, notice boards, and word-of-mouth. Students make multiple physical trips to units that are already taken. Landlords have no reliable channel to reach quality tenants. There is no centralised, trustworthy platform for this market.
        </p>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      content: (
        <p>
          A two-sided web platform — a tenant-facing discovery interface and a landlord-facing listing management dashboard. Core features scoped: property listing with photos and location, search and filter by price/area/availability, user authentication for both roles, and a direct inquiry system.
        </p>
      ),
    },
    {
      id: "ideation",
      label: "Ideation",
      content: (
        <p>
          Early sketches explored a map-first experience. User feedback from lo-fi prototyping showed students preferred a card-based listing grid with strong filters over a raw map. The final design: a filterable grid of listings with an embedded map as a secondary toggle view. The brand direction used warm earth tones to feel familiar and trustworthy, not cold or corporate.
        </p>
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: (
        <p>
          Landlords create verified listings with photos, location, price, and availability status. Students can search, filter, save favourites, and contact landlords directly through the platform. Authentication is handled with JWT. Images are managed via Cloudinary. The platform is fully responsive and designed mobile-first, since most Kenyan students browse on phones.
        </p>
      ),
    },
    {
      id: "testing",
      label: "Testing",
      content: (
        <p>
          Manual testing across Chrome, Firefox, and Safari on mobile and desktop. Form validation tested for edge cases. API endpoints tested with Postman. Performance profiling done via Lighthouse — achieved 90+ performance score on mobile.
        </p>
      ),
    },
  ];

  return <ProjectDetail project={project} sections={sections} />;
};

export default Kejaconnect;