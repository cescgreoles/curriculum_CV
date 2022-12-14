import "./index";
import "./App.scss";

import Nav from "./components/Nav";

import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

import { useState } from "react";

import ComponentLogo from "./components/ComponentLogo";
import About from "./pages/About";

export const Pages = {
  ABOUT: "ABOUT",

  SKILLS: "SKILLS",
  EDUCATION: "EDUCATION",
  EXPERIENCE: "EXPERIENCE",
  PORTFOLIO: "PORTFOLIO",
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  let currentComponent = null;
  if (currentPage === Pages.ABOUT) currentComponent = <About />;
  else if (currentPage === Pages.EXPERIENCE) currentComponent = <Experience />;
  else if (currentPage === Pages.SKILLS) currentComponent = <Skills />;
  else if (currentPage === Pages.EDUCATION) currentComponent = <Education />;
  else if (currentPage === Pages.PORTFOLIO) currentComponent = <Portfolio />;

  return (
    <div className="app">
      <header className="header">
        <ComponentLogo />
        <Nav setCurrentPage={setCurrentPage} />
      </header>
      <main>
        <section className="general-container">{currentComponent}</section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
