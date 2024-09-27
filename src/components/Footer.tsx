import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__body">
        <ul className="social-links">
          <li>
            <a
              href="mailto:briank.mwaniki@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon" style={{ fill: "#D93025" }}>
                <use xlinkHref="/icons.svg#icon-mail"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/BrianKiarieMwaniki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon">
                <use xlinkHref="/icons.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brian-kiarie-097b1b20b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon" style={{ fill: "#0077B5" }}>
                <use xlinkHref="/icons.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <p className="paragraph copyright">
        &copy; {currentYear} Brian Kiarie Mwaniki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
