import React from "react";
import prank_calculator from "../assets/prank_calculator.jpg";
import netflix from "../assets/netflix.jpg";
import movie_api from "../assets/movie_api.jpg";
import vidly_app from "../assets/vidly.jpg";
import { Layout } from "./layout";

export const Project = () => {
  return (
    <Layout>
      <div id="projects" className="projects py-3">
        <div className="title">
          <span>Projects</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md mb-3">
              <img src={prank_calculator} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>Prank Calculator</h2>
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
                Hi guys, i have developed this prank calculator which is designed
                for pranks.It puts out intentionally wrong results with sixty
                percent of probability.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md order-md-2 mb-3">
              <img src={netflix} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>Netflix Clone</h2>
              <div>
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p className="mt-3 fw-bold">Tech Used: HTML & CSS</p>
              <p>
                Hi guys, I have developed this netflix clone using HTML and CSS
                only. Netflix is used to watch movies and TV series online or
                streamed through out smart TV, game console, PC, Mac, mobile,
                tablet and more.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md order-md-2 mb-3">
              <img src={vidly_app} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>Vidly App</h2>
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
              <p>Hi guys, I have developed this Vidly Application.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <img src={movie_api} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>Movie List Api</h2>
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
                Hi guys, I have developed this Movie List API where you can search
                movies and move them either in happy or lazy list. Before you
                search, you will see randomly generated movies on the screen.
                Deleting the movies function if you don't like is also added.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
