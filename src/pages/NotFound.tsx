import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="section flex flex-column justify-center align-center">
      <h1 className="heading">Page Not Found</h1>
      <Link to="/" className="btn btn--primary">Go to Home page</Link>
    </section>
  );
};

export default NotFound;
