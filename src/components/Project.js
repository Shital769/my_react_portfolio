import React from "react";
import e_commerce_cms from "../assets/e_commerce_cms.png";
import expenses_tracker from "../assets/expenses_tracker.png";
import library_management from "../assets/library_management.png";
import vidly from "../assets/vidly.jpg";
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
              <img src={e_commerce_cms} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>E-commerce CMS</h2>
              <div>
                <a href="#">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p className="mt-3 fw-bold">
                Tech Used: HTML, CSS, JavaScript, React, React-Redux, NodeJs,
                MongoDB
              </p>
              <p>
                Hi guys, i have developed this full stack e-commerce cms where
                user can register and login to their account and experinece
                multiple features created to this website.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md order-md-2 mb-3">
              <img
                src={expenses_tracker}
                alt="portfolio project"
                width="100%"
              />
            </div>
            <div className="col-md">
              <h2>Expenses Tracker</h2>
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
                Hi guys, I have developed this full stack transaction record
                tracker using HTML, CSS, JavaScript, React. Using this tracker
                user will be able to categorize expenses and income to their
                account.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md order-md-2 mb-3">
              <img
                src={library_management}
                alt="portfolio project"
                width="100%"
              />
            </div>
            <div className="col-md">
              <h2>Library Management</h2>
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
                Hi guys, I have developed this Library Management System where
                student can login to their account and borrow the books as well
                as create a list of their favourite books.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <img src={vidly} alt="portfolio project" width="100%" />
            </div>
            <div className="col-md">
              <h2>Vidly </h2>
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
                Hi guys, I have developed this Vidly Movie App. User are abke to
                search movies based on title, genre and they can add new movie
                to the list too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
