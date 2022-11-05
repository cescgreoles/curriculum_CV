import React from "react";
import { CV } from "../utils/cv";
import "../styles/Experience.scss";

const Experience = (about) => {
  return (
    <div className="container-experience">
      {CV.experience.map((info) => {
        return (
          <div className="item-experience">
            <p>{info.name}</p>
            <p>{info.date}</p>
            <p>{info.where}</p>
            <p>{info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
