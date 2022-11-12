import React from "react";
import shital from "../assets/shital.jpg";

export const Project = () => {
  return (
    <div id="projects" className="projects py-3">
      <div className="title">
        <span>Projects</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md mb-3">
            <img src={shital} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
            Hi guys, i have developed this portfolio website using Figma deisgn and later completed with React abd JavaScript.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md order-md-2 mb-3">
            <img src={shital} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
            Hi guys, i have developed this game apication using Figma deisgn and later completed with React abd JavaScript.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img src={shital} alt="portfolio project" width="100%" />
          </div>
          <div className="col-md">
            <h2>My Portfoli site</h2>
            <div>
              <a href="#">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <p className="mt-3 fw-bold">
              Tech Used: HTML, CSS, JavaScript, React
            </p>

            <p>
            Hi guys, i have developed this To do App using Figma deisgn and later completed with React abd JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
