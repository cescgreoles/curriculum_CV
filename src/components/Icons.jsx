import React from "react";
import "../styles/Icons.scss";
import { CV } from "../utils/cv";

const Icons = (about) => {
  return (
    <div className="section-icons">
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            width="50px"
            height="50px"
          />
        </a>
      </button>
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios/500/apple-mail.png"
            alt=""
            width="50px"
            height="50px"
          />
        </a>
      </button>
      <button>
        <a href={CV.about.gitHub} target="_blank" rel="noopener noreferrer">
          <img
            src="data:image/png;base64,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"
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
