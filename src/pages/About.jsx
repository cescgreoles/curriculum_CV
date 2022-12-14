import React from "react";
import { CV } from "../utils/cv";
import "../styles/About.scss";
import Presentation from "../components/Presentation";

const About = (about) => {
  return (
    <div>
      <div>
        <Presentation />
      </div>
      <div className="container-about">
        {CV.aboutMe.map((info) => {
          return (
            <div className="item-about">
              <p>{info.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
