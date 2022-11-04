import React from "react";
import { CV } from "../utils/cv";
import "../styles/Experience.scss";

const Experience = (about) => {
  return (
    <div className="container-experience">
      {CV.experience.map((info) => {
        return (
          <div>
            <p className="item-experience">{info.name}</p>
            <p className="item-experience">{info.date}</p>
            <p className="item-experience">{info.where}</p>
            <p className="item-experience">{info.description}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Experience;
