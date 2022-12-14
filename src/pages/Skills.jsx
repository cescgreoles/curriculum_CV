import React from "react";
import SkillsDeveloper from "../components/SkillsDeveloper";
import SkillsLanguages from "../components/SkillsLanguages";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div>
      <div className="paddings-general">
        <SkillsDeveloper />
      </div>
      <div className="paddings-general">
        <SkillsLanguages />
      </div>
    </div>
  );
};

export default Skills;
