import React from "react";
import { CV } from "../utils/cv";
import "../styles/Experience.scss";

const Experience = (about) => {
  return (
    <div className="container-information">
      {CV.experience.map((info) => {
        return (
          <div className="item-information">
            <p>{info.name}</p>
            <p>{info.date}</p>
            <p>{info.where}</p>
            <p>{info.description}</p>
            <br></br>
            <img src={info.img} alt={info.img} className="logo-image"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
