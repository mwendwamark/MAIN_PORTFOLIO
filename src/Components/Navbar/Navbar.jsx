import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if navbar should have backdrop blur and color change
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
    <header>
      <nav
        className={`main_navbar ${scrolled ? "scroll_navbar" : ""} ${
          !visible ? "main_navbar--hidden" : ""
        } `}
      >
        <div className="navbar_logo">
          <NavLink to="/">Mwendwa</NavLink>
        </div>

        <div className="nav_toggle" onClick={toggleMenu}>
          <i className="ri-menu-3-line"></i>
        </div>

        <ul className={`main_navbar_links ${menuOpen ? "active" : ""}`}>
          <div className="nav_close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
          <li className="nav_link" onClick={closeMenu}>
            <NavLink to="/about">About</NavLink>
          </li>

          <li className="nav_link" onClick={closeMenu}>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li className="nav_link" onClick={closeMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li className="nav_link" onClick={closeMenu}>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
