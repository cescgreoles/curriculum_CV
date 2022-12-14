import React from "react";
import { CV } from "../utils/cv";
import "../styles/Skills.scss";

const SkillsLanguages = (about) => {
  return (
    <section className="section-skills">
      <div>
        <h2>Languages</h2>
      </div>
      <div className="container-information-languages">
        {CV.languages.map((info) => {
          return (
            <div className="item-information-languages">
              <p>{info.idioma}</p>

              <p>{info.level}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsLanguages;
