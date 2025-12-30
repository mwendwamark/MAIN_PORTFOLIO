import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import ButtonPri from "../ButtonPri/ButtonPri";
import ButtonWhiteOutline from "../ButtonWhiteOutline/ButtonWhiteOutline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if navbar should have backdrop blur and color change
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down & past threshold - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header
      className={`main_navbar ${scrolled ? "scroll_navbar" : ""} ${
        !visible ? "main_navbar_hidden" : ""
      } ${isHome && !scrolled ? "navbar_overlay" : ""}`}
    >
      <nav className="container main_navbar_container">
        <div className="main_navbar_logo">
          <NavLink to="/">
            {" "}
            Nthei<span></span>
          </NavLink>
        </div>

        <ul className={`main_navbar_links ${menuOpen ? "active" : ""}`}>
          <li className="main_navbar_link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="main_navbar_link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="main_navbar_link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="main_navbar_link">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="main_navbar_link">
            <NavLink to="/resume">Resume</NavLink>
          </li>

          <li className="main_navbar_link">
            <ButtonWhiteOutline text={"Get in Touch"} to="/contact" />
          </li> 
        </ul>

        <div className="main_navbar_menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={32} /> : <List size={32} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
