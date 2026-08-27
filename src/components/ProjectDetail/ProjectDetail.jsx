import React, { useEffect, useRef, useState } from "react";
import "./ProjectDetail.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import ButtonOrangeOutline from "../ButtonOrangeOutline/ButtonOrangeOutline";
import { projectsData } from "../../data/projectsData";
import bgImage from "../../assets/ProjectsBG.webp";

const ProjectDetail = ({ project, sections }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.title} | Nthei`;
  }, [pathname, project.title]);

  useEffect(() => {
    // Fade in observer
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade_in_section").forEach((el) => {
      fadeObserver.observe(el);
    });

    return () => fadeObserver.disconnect();
  }, [pathname]);

  useEffect(() => {
    // Nav highlight observer
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        navObserver.observe(el);
      }
    });

    return () => navObserver.disconnect();
  }, [sections, pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug);
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const slide = carouselRef.current.querySelector(".pd_slide");
    if (!slide) return;
    const scrollAmount = slide.offsetWidth + 20;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="pd_page_wrapper">
      {/* Hero Section */}
      <section className="pd_hero_section">
        <div className="pd_hero_bg">
          <img
            src={bgImage}
            alt="Projects Background"
            className="pd_hero_image"
            loading="lazy"
          />
          <div className="pd_hero_overlay"></div>
        </div>
        <div className="pd_hero_content">
          <span className="pd_hero_label">Case Study</span>
          <h1 className="pd_hero_title">{project.title}</h1>
          <p className="pd_hero_tagline">{project.tagline}</p>
        </div>
      </section>

      <div className="pd_back_link_container">
        <span className="pd_back_link" onClick={() => navigate(-1)}>
          ← Back to Projects
        </span>
      </div>

      {/* Meta Strip */}
      <section className="pd_meta_section fade_in_section">
        <div className="pd_meta_grid">
          <div className="pd_meta_item">
            <span className="pd_meta_label">Team</span>
            <span className="pd_meta_value">{project.team}</span>
          </div>
          <div className="pd_meta_item">
            <span className="pd_meta_label">Industry</span>
            <span className="pd_meta_value">{project.industry}</span>
          </div>
          <div className="pd_meta_item">
            <span className="pd_meta_label">Domain</span>
            <span className="pd_meta_value">{project.domain}</span>
          </div>
          <div className="pd_meta_item">
            <span className="pd_meta_label">Duration</span>
            <span className="pd_meta_value">{project.duration}</span>
          </div>
          <div className="pd_meta_item">
            <span className="pd_meta_label">Year</span>
            <span className="pd_meta_value">{project.year}</span>
          </div>
          {project.liveUrl && (
            <div className="pd_meta_item">
              <span className="pd_meta_label">Live Site</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pd_meta_value pd_live_url"
              >
                View Live Site ↗
              </a>
            </div>
          )}
        </div>
      </section>

      {/* At a Glance */}
      <section className="pd_overview_section fade_in_section">
        <div className="pd_overview_left">
          <span className="pd_overview_eyebrow">At a Glance</span>
          <h2 className="pd_overview_title">Overview</h2>
          <p className="pd_overview_text">{project.overview}</p>

          <span className="pd_tech_title">Technologies</span>
          <div className="pd_tech_list">
            {project.technologies.map((tech, index) => (
              <span key={index} className="pd_tech_pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pd_mockup_container">
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={`${project.title} Mockup`}
              className="pd_mockup_image"
              loading="lazy"
            />
          ) : (
            <div className="pd_mockup_placeholder">Mockup coming soon</div>
          )}
        </div>
      </section>

      {/* Mobile Pill Nav */}
      <div className="pd_pill_nav_mobile">
        {sections.map(({ id, label }) => (
          <span
            key={id}
            className={`pd_pill_item ${activeSection === id ? "active" : ""}`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Body Section */}
      <section className="pd_body_section">
        <div className="pd_sticky_nav_container">
          <div className="pd_sticky_nav">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                className={`pd_nav_item ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pd_content_container">
          {sections.map(({ id, content, label }) => (
            <div key={id} id={id} className="pd_content_section fade_in_section">
              <h3 className="pd_content_title">{label}</h3>
              <div className="pd_content_body">{content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* More Projects */}
      <section className="pd_more_section fade_in_section">
        <div className="pd_more_header">
          <h2 className="pd_more_title">Check out my other works</h2>
          <div className="pd_more_nav">
            <button
              type="button"
              className="pd_more_nav_btn"
              onClick={() => scrollCarousel("left")}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="pd_more_nav_btn"
              onClick={() => scrollCarousel("right")}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
            <ButtonOrangeOutline text="More Projects" to="/projects" />
          </div>
        </div>

        <div className="pd_carousel" ref={carouselRef}>
          {otherProjects.map((p, index) => (
            <div className="pd_slide" key={p.slug}>
              <div className="pd_slide_info">
                <div className="pd_slide_info_top">
                  <span className="pd_slide_index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pd_slide_category">{p.category}</span>
                </div>
                <h3 className="pd_slide_title">{p.title}</h3>
                <p className="pd_slide_desc">{p.tagline}</p>
                <NavLink to={p.route} className="pd_slide_link">
                  View Case Study
                  <ArrowUpRight size={16} weight="bold" />
                </NavLink>
              </div>
              <NavLink to={p.route} className="pd_slide_image_card">
                <img
                  src={p.heroImage}
                  alt={p.title}
                  className="pd_slide_image"
                  loading="lazy"
                />
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
