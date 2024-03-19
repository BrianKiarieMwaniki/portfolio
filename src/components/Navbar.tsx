import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useSelector } from "react-redux";
import { navLinks } from "../constants";
interface AppState {
  scroll: {
    currentSection: string;
  };
}

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isCollapsed, setIsCollapse] = useState(false);
  const [active, setActive] = useState("");
  const currentSection = useSelector(
    (state: AppState) => state.scroll.currentSection
  );

  useEffect(() => {
    setActive(currentSection);
  }, [currentSection, active]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <Link
        to="/"
        className="navbar__brand"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
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
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "active" : ""}`}
              onClick={() => {
                setIsCollapse(!isCollapsed);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
