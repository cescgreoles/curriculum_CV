import React from "react";
import "../styles/Skills.scss";
import { CV } from "../utils/cv";

const Skills = (about) => {
  return (
    <div className="container-information">
      {CV.skills.map((info) => {
        return (
          <div className="item-information">
            <p>{info.name}</p>
            <img
              src={info.img}
              alt={info.img}
              className="img-icon-skills"
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
