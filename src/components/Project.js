import React from "react";
import e_commerce_cms from "../assets/e_commerce_cms.png";
import expenses_tracker from "../assets/expenses_tracker.png";
import library_management from "../assets/library_management.png";
import movie_api from "../assets/movie_api.jpg";
import prank_calculator from "../assets/prank_calculator.png";
import gamehub from "../assets/gamehub.png";
import { Layout } from "./layout";

export const Project = () => {
  return (
    <Layout>
      <div className="projects container text-center">
        <h2 className="project-title mb-5 slct">Some of My Recent Projects</h2>
        <div className="projects-container row ">
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img
                  src={prank_calculator}
                  alt="e-com"
                  className="project-pic  "
                />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">Calculator App</h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, Javascript
                  </h4>
                  <p className="project__description--para">
                    This Simple Prank Calculator injects humor into math by
                    delivering random results that defy the laws of mathematics.
                    Expect the unexpected, from calculating the meaning of life
                    to summoning mathematical unicorns. Get ready for a good
                    laugh as you break the norms of traditional calculations
                    with a smile! 😄
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2 me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://prank-calculator-jdl5zi57l-shital769.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img src={gamehub} alt="e-com" className="project-pic  " />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">
                    Gaming Hub Clone
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, TypeScript
                  </h4>
                  <p className="project__description--para mb-0">
                    A video game discovery web app that helps you find new and
                    interesting games to play and you can search for games by
                    platform, genre, and more.
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://gaming-hub-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img
                  src={library_management}
                  alt="e-com"
                  className="project-pic  "
                />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">
                    Library Management
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, Javascript, NodeJs
                  </h4>
                  <p className="project__description--para">
                    A perfect Libarary Management System that allows student and
                    teachers to arrange their books systematically.
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
        <div className="projects-container row ">
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img
                  src={e_commerce_cms}
                  alt="e-com"
                  className="project-pic  "
                />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">
                    E-Commerce Clone
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, Javascript ,NextJs
                  </h4>
                  <p className="project__description--para">
                    A clone of the most recognized E-Commerce industry with
                    react bootstrap.
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img src={movie_api} alt="e-com" className="project-pic  " />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">
                    Movie List Api Clone
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, Javascript, NodeJs
                  </h4>
                  <p className="project__description--para">
                    A clone of the Movie Lists Api, which allows you to add
                    mobies in your happy, sad and lazy moods lists.
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://react-movie-list-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
          <div className="project-container project-card  col ">
            <div className="project">
              <div className="project_wrapper">
                <img
                  src={expenses_tracker}
                  alt="e-com"
                  className="project-pic  "
                />
                <div className="project_wrapper--bg"></div>
                <div className="project_description">
                  <h3 className="project_description_title">
                    Expense Tracker App
                  </h3>
                  <h4 className="project__description--sub-title">
                    Html, Css, Javascript
                  </h4>
                  <p className="project__description--para">
                    An application that allows you to track your daily expenses.
                  </p>
                  <div className="project_description_links">
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.shitalrayamajhi.com/"
                      className="project_description_link me-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/Shital769/full-stack-client-transaction"
                target="_blank"
                rel="noreferrer"
                className="project-link  effectForLink"
              >
                Check it Out!
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
