import React from "react";
import "../styles/Portfolio.scss";
import { CV } from "../utils/cv";

const Portfolio = ({ about }) => {
  return (
    <div className="container-information">
      {CV.portfolio.map((info) => {
        return (
          <button className="button-portfolio">
            <div className="button-click">
              <a href={info.url} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt={info.img} className="img-size"></img>
              </a>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Portfolio;
