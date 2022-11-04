import React from "react";
import { CV } from "../utils/cv";

const Icons = (about) => {
  return (
    <div className="section-icons">
      <div className="icons-info"></div>
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png"
            alt=""
            width="50px"
            height="50px"
          />
        </a>
      </button>
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png"
            alt=""
            width="50px"
            height="50px"
          />
        </a>
      </button>
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png"
            alt=""
            width="50px"
            height="50px"
          />
        </a>
      </button>
    </div>
  );
};

export default Icons;
