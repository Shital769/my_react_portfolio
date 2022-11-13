import React from "react";
import shital from "../assets/shital.png";

export const AboutMe = () => {
  return (
    <section id="about" className="container">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <img src={shital} alt="some img" width="100%" />
        </div>
        <div className="col-md-8">
          <p>
          Dedicated person accustomed to performing effectively in both collaborative and autonomous capacities. Strong knowledge of HTML, CSS, JavaScript, React JS and C-sharp. Eager to expand horizons and make positive impact by taking on hands-on, dynamic position in IT industries.
          </p>
         
        </div>
      </div>
    </section>
  );
};
