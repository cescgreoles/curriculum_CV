import React from "react";
import { Pages } from "../App";

const Nav = (props) => {
  const { setCurrentPage } = props;

  return (
    <section className="navbar">
      {Object.keys(Pages).map((page) => {
        return (
          <button
            className="navbar-button"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </section>
  );
};

export default Nav;
