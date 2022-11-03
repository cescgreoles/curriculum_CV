import React from "react";

const Nav = (props) => {
  const { setCurrentRoute } = props;

  return (
    <div className="navbar">
      <span className="navbar-item">ABOUT ME</span>
      <span className="navbar-item">PORTFOLIO</span>
      <span className="navbar-item">EXPERIENCE</span>
      <span className="navbar-item">CONTACT</span>
    </div>
  );
};

export default Nav;
