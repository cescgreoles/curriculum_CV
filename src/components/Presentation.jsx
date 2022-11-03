import React from "react";
import "./Presentation.scss";

const Presentation = () => {
  return (
    <div className="presentation">
      <section className="app-photo">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="imgprofile"
          className="photo-src"
        ></img>
      </section>
      <section className="app-info">
        <h1>CESC GREOLES</h1>
      </section>
    </div>
  );
};

export default Presentation;
