import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  const [isCollapsed, setIsCollapse] = useState(false);
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar__brand"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={logo} alt="logo" className="navbar__brand--logo" />
      </Link>

      <div
        className="navbar__burger"
        onClick={() => setIsCollapse(!isCollapsed)}
      >
        <svg className="icon">
          <use xlinkHref="/icons.svg#icon-menu"></use>
        </svg>
      </div>

      <div className={`navbar__collapse ${isCollapsed ? "show" : ""}`}>
        <ul className="navbar__links">
          <li onClick={() => setIsCollapse(!isCollapsed)}>
            <a className="active" href="#aboutme">
              About
            </a>
          </li>
          <li onClick={() => setIsCollapse(!isCollapsed)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setIsCollapse(!isCollapsed)}>
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
