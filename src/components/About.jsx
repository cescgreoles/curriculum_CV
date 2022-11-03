import React from "react";
import { CV } from "../utils/cv";

const About = ({ about }) => {
  return (
    <div className="container-information">
      <p>
        {CV.about.name} {CV.about.lastName}
      </p>
      {CV.education.map((info) => {
        return (
          <div>
            <p>{info.name}</p>
            <p>{info.date}</p>
            <p>{info.where}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default About;
