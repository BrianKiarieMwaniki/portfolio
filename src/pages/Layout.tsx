import React, {  useRef } from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const containerRef = useRef<HTMLElement>(null);
  return (
    <>
      <Navbar containerRef={containerRef} />
      <main ref={containerRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
