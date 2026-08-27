import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ProjectsDisplay.css";
import { projectsData } from "../../../data/projectsData";
import { NavLink } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import PreTitle from "../../../components/PreTitle/PreTitle";
import BackgroundShapesLeft from "../../../components/BackgroundShapes/BackgroundShapesLeft";

const AUTOPLAY_DURATION = 10000; // ms per slide
const TICK = 40; // ms

const ProjectsDisplay = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const startRef = useRef(Date.now());
  const intervalRef = useRef(null);

  const categories = [
    "All",
    ...new Set(projectsData.map((p) => p.category).filter(Boolean)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const total = filteredProjects.length;

  const goTo = useCallback(
    (index) => {
      if (total === 0) return;
      const next = ((index % total) + total) % total;
      setActiveIndex(next);
      setProgress(0);
      startRef.current = Date.now();
    },
    [total],
  );

  const handlePrev = () => goTo(activeIndex - 1);
  const handleNext = () => goTo(activeIndex + 1);

  // Reset carousel when the category filter changes
  useEffect(() => {
    setActiveIndex(0);
    setProgress(0);
    startRef.current = Date.now();
  }, [activeCategory]);

  // Autoplay + progress bar
  useEffect(() => {
    if (total === 0) return undefined;

    startRef.current = Date.now();
    setProgress(0);

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    }, TICK);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, total]);

  if (total === 0) return null;

  return (
    <>
      <section className="projects_display_section section">
        <BackgroundShapesLeft />
        <div className="projects_display_container container">
          <div className="projects_display_header">
            <div className="projects_display_header_left">
              <PreTitle preTitle={"My portfolio"} />
              <h2 className="shared_header_title">Selected Projects</h2>
            </div>
            <div className="projects_display_nav">
              <button
                type="button"
                className="projects_nav_btn"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="projects_nav_btn"
                onClick={handleNext}
                aria-label="Next project"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="projects_filter_container">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects_filter_btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects_carousel_viewport">
            <div
              className="projects_carousel_track"
              style={{
                transform: `translateX(calc(-${activeIndex} * (var(--slide-width) + var(--slide-gap))))`,
              }}
            >
              {filteredProjects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    className={`projects_slide ${isActive ? "is_active" : ""}`}
                    key={project.slug}
                  >
                    <div className="project_info_card">
                      <div className="project_info_top">
                        <span className="project_info_index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="project_info_category">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="project_info_title">{project.title}</h3>
                      <p className="project_info_desc">{project.tagline}</p>

                      <NavLink to={project.route} className="project_info_link">
                        View Case Study
                        <ArrowUpRight size={16} weight="bold" />
                      </NavLink>

                      <div className="project_progress_track">
                        <div
                          className="project_progress_fill"
                          style={{ width: isActive ? `${progress}%` : "0%" }}
                        />
                      </div>
                    </div>

                    <NavLink to={project.route} className="project_image_card">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="project_image"
                        loading="lazy"
                      />
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDisplay;
