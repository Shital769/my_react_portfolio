import React from "react";
import Typical from "react-typical";
import shital from "../assets/shital.png";
import { Layout } from "./layout";
import Shital_Rayamajhi_Resume from "../assets/Shital_Rayamajhi_Resume.pdf";
export const Hero = () => {
  return (
    <Layout>
      <section className="hero py-5  ">
        <div className="container  ">
          <div className="row py-5   ">
            <div className="col-md-5 text-center order-md-2">
              <img src={shital} alt="my-pic" width="90%" />
            </div>
            <div className="col-md-7 mt-5 pt-5">
              <span>
                Hello I'm <span className="fw-bold">Shital Rayamajhi</span>
              </span>
              <div className="mt-2 mb-5 fs-3 fw-bold ">
                Full Stack Software Developer | Web Developer
              </div>
              <div>
                <span>
                  {""}
                  <h1>
                    {""}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Shital Rayamajhi 😎 ",
                        1000,
                        "Full Stack Developer 💻",
                        1000,
                        "MERN Stack Dev 😎",
                        1000,
                        "Web Developer 🌐",
                        1000,
                        "React/ReactJS Dev 📱",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="fs-8 ">
                    Knack of building applications with frontend and backend
                    operations.{""}
                  </span>
                </span>
              </div>
              <p className="mt-2">
                I love designing and developing websites as well as keen in
                solving problems and building solutions.
              </p>
              <a href={Shital_Rayamajhi_Resume} download>
                <button className="btn btn-danger">
                  Download Resume <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
