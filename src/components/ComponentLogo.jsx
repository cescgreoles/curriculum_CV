import React from "react";
import "../styles/ComponentLogo.scss";

const ComponentLogo = () => {
  return (
    <section className="component-logo">
      <img src={require("./cv-icon.png")} alt={"imagen1"}></img>
    </section>
  );
};

export default ComponentLogo;
