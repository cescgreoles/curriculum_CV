import React from "react";
import "../styles/Presentation.scss";
import { CV } from "../utils/cv";

const Presentation = (about) => {
  return (
    <div className="general">
      <section className="app-photo">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="imgprofile"
          className="photo-src"
        ></img>
      </section>
      <p>
        {CV.about.name} {CV.about.lastName}
      </p>
      <p>{CV.about.city}</p>
      <p>{CV.about.birthDate}</p>
      <p>{CV.about.email}</p>
      <p>{CV.about.phone}</p>
      <section className="app-info"></section>
    </div>
  );
};

export default Presentation;
