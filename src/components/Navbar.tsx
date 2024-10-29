import React, { RefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useSelector } from "react-redux";
import { navLinks } from "../constants";
import gsap from "gsap";

import { ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

interface AppState {
  scroll: {
    currentSection: string;
  };
}

interface Props {
  containerRef: RefObject<HTMLElement>;
}

const Navbar = ({ containerRef }: Props) => {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);
  const [isCollapsed, setIsCollapse] = useState(false);
  const [active, setActive] = useState("");
  const currentSection = useSelector(
    (state: AppState) => state.scroll.currentSection
  );

  const { contextSafe } = useGSAP({ scope: containerRef });

  useEffect(() => {
    setActive(currentSection);

    if (isCollapsed) {
      gsap.to(collapseRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "sine",
      });
    } else {
      gsap.to(collapseRef.current, {
        height: "4rem",
        duration: 0.5,
        ease: "sine",
        padding: "1rem 0",
      });
    }
  }, [currentSection, active, isCollapsed]);

  const scrollTo = contextSafe((sectionId: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 120,
      },
      ease: "power3.out",
    });
  });

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

      <div
        ref={collapseRef}
        className={`navbar__collapse ${isCollapsed ? "show" : ""}`}
      >
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "active" : ""}`}
              onClick={() => {
                setIsCollapse(!isCollapsed);
                scrollTo(link.id);
              }}
            >
              <span>{link.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
