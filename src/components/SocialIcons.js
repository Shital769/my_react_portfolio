import React from "react";
import twitter from "../assets/twitter.gif";
import instagram from "../assets/instagram.gif";
import linkedin from "../assets/linkedin.gif";
import github from "../assets/github.gif";

const SocialIcons = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/shital-rayamajhi/" target="_blank">
        <img src={linkedin} alt="" className="socicon" />
      </a>
      <a href="https://github.com/Shital769" target="_blank">
        <img src={github} alt="" className="socicon" />
      </a>
      <a href="https://twitter.com/RayamajhiS47565" target="_blank">
        <img src={twitter} alt="" className="socicon" />
      </a>
      <a href="#" target="_blank">
        <img src={instagram} alt="" className="socicon" />
      </a>
    </div>
  );
};

export default SocialIcons;
