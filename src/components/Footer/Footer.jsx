import React from "react";
import "./Footer.css";
import {
  GithubLogo,
  LinkedinLogo,
  TiktokLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_contents container">
          <div className="footer_contents_info">
            <span>GET IN TOUCH</span>
            <div className="footer_contact_details">
              <a href="mailto:devnthei@gmail.com" className="footer_link">
                devnthei@gmail.com
              </a>
              <a href="tel:+254717084324" className="footer_link">
                +254 717 084 324
              </a>
            </div>
          </div>

          <div className="footer_contents_info">
            <span>LOCATION</span>
            <div>
              <p>Nairobi,</p>
              <p>Kenya</p>
            </div>
          </div>

          <div className="footer_contents_info">
            <span>PAGES</span>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer_contents_info">
            <span>FIND ME HERE</span>
            <div className="footer_socials">
              <a
                href="https://www.instagram.com/dev_nthei/"
                aria-label="Instagram Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={22} weight="regular" />
              </a>
              <a
                href="https://www.linkedin.com/in/markmwendwanthei"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={22} weight="regular" />
              </a>
              <a
                href="https://www.tiktok.com/@dev_nthei"
                aria-label="TikTok Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokLogo size={22} weight="regular" />
              </a>
              <a
                href="https://github.com/devnthei"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo size={22} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        <p>© {currentYear} Mark Mwendwa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
