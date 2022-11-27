import React from "react";
import { Footer } from "./Footer";
import { TopNav } from "./TopNav";

export const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="main-layout">{children}</div>
      <Footer />

      <a href="#navbar" id="goup">
        <i className="fa-solid fa-circle-up"></i>
      </a>
    </>
  );
};
