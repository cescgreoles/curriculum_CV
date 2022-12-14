import React from "react";
import { CV } from "../utils/cv";
import "../styles/Skills.scss";

const SkillsDeveloper = (about) => {
  return (
    <section className="section-skills">
      <div>
        <h2>Developer Skills</h2>
      </div>
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
    </section>
  );
};

export default SkillsDeveloper;
