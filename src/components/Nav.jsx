import React from "react";
import "../styles/Navbar.scss";
import { Pages } from "../App";

const Nav = (props) => {
  const { setCurrentPage } = props;

  return (
    <section className="navbar">
      {Object.keys(Pages).map((page) => {
        return (
          <div>
            {" "}
            <img src="../../public/cv-icon.png" alt=""></img>
            <button
              className="navbar-button"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Nav;
