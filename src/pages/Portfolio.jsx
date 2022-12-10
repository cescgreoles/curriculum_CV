import React from "react";
import "../styles/Portfolio.scss";
import { CV } from "../utils/cv";

const Portfolio = ({ about }) => {
  return (
    <div className="div-container-portfolio">
      {CV.portfolio.map((info) => {
        return (
          <a href={info.url} target="_blank" rel="noopener noreferrer">
            <img
              src={info.img}
              alt={info.img}
              className="imagen-portfolio"
            ></img>
          </a>
        );
      })}
    </div>
  );
};

export default Portfolio;
