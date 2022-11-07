import "./index";
import "./App.scss";
import Presentation from "./components/Presentation";
import Icons from "./components/Icons";
import Nav from "./components/Nav";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Languages from "./pages/Languages";

import { useState } from "react";

export const Pages = {
  ABOUT: "ABOUT",
  PORTFOLIO: "PORTFOLIO",
  SKILLS: "SKILLS",
  EDUCATION: "EDUCATION",
  EXPERIENCE: "EXPERIENCE",
  LANGUAGES: "LANGUAGES",
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  let currentComponent = null;
  if (currentPage === Pages.ABOUT) currentComponent = <About />;
  else if (currentPage === Pages.PORTFOLIO) currentComponent = <Portfolio />;
  else if (currentPage === Pages.EXPERIENCE) currentComponent = <Experience />;
  else if (currentPage === Pages.SKILLS) currentComponent = <Skills />;
  else if (currentPage === Pages.EDUCATION) currentComponent = <Education />;
  else if (currentPage === Pages.LANGUAGES) currentComponent = <Languages />;

  return (
    <div className="app">
      <header>
        <Presentation />
      </header>
      <main>
        <Nav setCurrentPage={setCurrentPage} />
        <section className="general-container">{currentComponent}</section>
      </main>
      <footer>
        <Icons />
      </footer>
    </div>
  );
}

export default App;
