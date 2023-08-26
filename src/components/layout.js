import React from "react";
import { Footer } from "./Footer";
import { TopNav } from "./TopNav";
import SocialIcons from "./SocialIcons";

export const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="main-layout">{children}</div>
      <SocialIcons />
      <Footer />

      <a href="#navbar" id="goup">
        <i className="fa-solid fa-2x fa-circle-up"></i>
      </a>
    </>
  );
};
