import React from "react";
import "../styles/Portfolio.scss";
import { CV } from "../utils/cv";

const Portfolio = ({ about }) => {
  return (
    <div className="container-information">
      {CV.portfolio.map((info) => {
        return (
          <button>
            <div className="button-click">
              <img src={info.img} alt={info.img} className="img-size"></img>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Portfolio;
