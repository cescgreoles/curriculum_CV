import React from "react";
import { CV } from "../utils/cv";
import "../styles/About.scss";

const About = (about) => {
  return (
    <div className="container-about">
      {CV.aboutMe.map((info) => {
        return (
          <div className="item-information">
            <p>{info.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
