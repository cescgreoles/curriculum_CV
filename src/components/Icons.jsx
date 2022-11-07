import React from "react";
import "../styles/Icons.scss";
import { CV } from "../utils/cv";

const Icons = (about) => {
  return (
    <div className="section-icons">
      <button className="button-icons">
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Logo-1.png"
            alt=""
            width="50px"
            height="50px"
            className="img-logo"
          />
        </a>
      </button>

      <button className="button-icons">
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-noir.png"
            alt=""
            width="50px"
            height="50px"
            className="img-logo"
          />
        </a>
      </button>

      <button className="button-icons">
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/10/14/58/letters-389108_640.png"
            alt=""
            width="50px"
            height="50px"
            className="img-logo"
          />
        </a>

        <span className="span-ajust">fgreoles@gmail.com</span>
      </button>
    </div>
  );
};

export default Icons;
