import React from "react";
import "../styles/Presentation.scss";
import { CV } from "../utils/cv";

const Presentation = (about) => {
  return (
    <div className="general">
      <section className="presentation-photo">
        <img src="Tema.png" alt="Tema.png" className="photo-src"></img>
      </section>
      <section className="presentation-info">
        <p>
          {CV.about.name} {CV.about.lastName}
        </p>
        <p>{CV.about.city}</p>
        <p>{CV.about.birthDate}</p>
        <p>{CV.about.profesion}</p>
        <p>{CV.about.profesion2}</p>
      </section>
      <div>
        <p>full stack developer</p>
      </div>
    </div>
  );
};

export default Presentation;
