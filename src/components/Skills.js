import React from "react";
import { Layout } from "./layout";

export const Skills = () => {
  return (
    <Layout>
      <section className="skills container py-2 " id="skill">
        <h2 className="skill-header"> My Top Skills</h2>

        <div className="skills-wrapper ">
          <div className=" animate__animated animate__pulse icons ">
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-html5 text-danger   "></i> HTML
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-css3-alt text-primary "></i> CSS
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-square-js text-warning "></i>{" "}
              JavaScript
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-figma"></i>Figma
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-react"></i>React
            </div>
            <div className="rounded-2 shitaaal">
              <i className="fa-brands fa-node"></i>NodeJs
            </div>
            <div className="rounded-2 shitaaal">
              <i className="mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <rect
                    width="36"
                    height="36"
                    x="6"
                    y="6"
                    fill="#1976d2"
                  ></rect>
                  <polygon
                    fill="#fff"
                    points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                  ></polygon>
                  <path
                    fill="#fff"
                    d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                  ></path>
                </svg>
              </i>{" "}
              TypeScript
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
