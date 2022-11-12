import React from "react";
import shital from "../assets/shital.jpg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5 text-center order-md-2">
            <img src={shital} alt="my image" width="90%" />
          </div>

          <div className="col-md-7 mt-5 pt-5">
            hi 👋 i'm
            <span className="fw-bold">Shital Rayamajhi</span>
            <div className="mt-2 mb-5 fs-3 fw-bold">
              Software Engineer | Web Developer
            </div>
            <p>
              I love designing and coding as well as to teach others what i have
              learnt. I have been studying full stack developer bootcamp course
              in dented code since last month and this s my first portfolio
              website.
            </p>
            <button className="btn btn-danger">
              Download Resume <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
