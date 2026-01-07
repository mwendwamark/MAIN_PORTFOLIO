import React from "react";
import "./Projects.css";
import PreTitle from "../../../components/PreTitle/PreTitle";
import { ArrowUpRight } from "@phosphor-icons/react";
import Img1 from "../../../assets/KejaConnect.webp";
import Img2 from "../../../assets/KilimoLink.webp";
import Img3 from "../../../assets/LiquorChapChap.webp";
import Img4 from "../../../assets/GRWC.webp";
import { NavLink } from "react-router-dom";
const Projects = () => {
  return (
    <div className="home_projects_section section" id="projects">
      <div className="home_projects_container container">
        <div className="home_projects_headers">
          <div className="home_projects_headers_left">
            <PreTitle preTitle={"A glimpse of my works"} />
            <h2 className="shared_header_title">Projects</h2>
          </div>
          <div className="home_projects_headers_right">
            <p className="shared_header_desc">
              I have a diverse portfolio of projects that showcase my skills and
              expertise in web development. From small personal projects to
              larger-scale applications, I have worked on a variety of
              technologies and frameworks to create innovative and user-friendly
              solutions.
            </p>
          </div>
        </div>

        <div className="home_projects_showcase">
          <NavLink to="" className="home_project_content">
            <div className="home_project_content_left">
              <div className="home_project_content_left_upper">
                <strong>WEB DEVELOPMENT</strong>
                <h3>Keja Connect</h3>
              </div>
              <div className="home_project_content_left_lower">
                <div className="home_project_duration">
                  <span>Duration</span>
                  <p>2 months</p>
                </div>
                <div className="home_projects_right_arrow_icon">
                  <ArrowUpRight size={30} />
                </div>
              </div>
            </div>

            <div className="home_project_content_right">
              <img src={Img1} alt="" width="100%" height="500" />
            </div>
          </NavLink>
          <NavLink to="" className="home_project_content">
            <div className="home_project_content_left">
              <div className="home_project_content_left_upper">
                <strong>AGRICULTURE PLATFORM</strong>
                <h3>Kilimo Link</h3>
              </div>
              <div className="home_project_content_left_lower">
                <div className="home_project_duration">
                  <span>Duration</span>
                  <p>2 months</p>
                </div>
                <div className="home_projects_right_arrow_icon">
                  <ArrowUpRight size={30} />
                </div>
              </div>
            </div>

            <div className="home_project_content_right">
              <img src={Img2} alt="" width="100%" height="500" />
            </div>
          </NavLink>
          <NavLink to="" className="home_project_content">
            <div className="home_project_content_left">
              <div className="home_project_content_left_upper">
                <strong>E-COMMERCE</strong>
                <h3>Liquor Chapchap</h3>
              </div>
              <div className="home_project_content_left_lower">
                <div className="home_project_duration">
                  <span>Duration</span>
                  <p>2 months</p>
                </div>
                <div className="home_projects_right_arrow_icon">
                  <ArrowUpRight size={30} />
                </div>
              </div>
            </div>

            <div className="home_project_content_right">
              <img src={Img3} alt="" width="100%" height="500" />
            </div>
          </NavLink>
          <NavLink to="" className="home_project_content">
            <div className="home_project_content_left">
              <div className="home_project_content_left_upper">
                <strong>WEB DESIGN & CMS</strong>
                <h3>GRW Church Website</h3>
              </div>
              <div className="home_project_content_left_lower">
                <div className="home_project_duration">
                  <span>Duration</span>
                  <p>2 months</p>
                </div>
                <div className="home_projects_right_arrow_icon">
                  <ArrowUpRight size={30} />
                </div>
              </div>
            </div>
            <div className="home_project_content_right">
              <img src={Img4} alt="" width="100%" height="500" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
