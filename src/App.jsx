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
import Contact from "./pages/Contact";
import { useState } from "react";

export const Pages = {
  ABOUT: "ABOUT",
  PORTFOLIO: "PORTFOLIO",
  SKILLS: "SKILLS",
  EDUCATION: "EDUCATION",
  EXPERIENCE: "EXPERIENCE",
  CONTACT: "CONTACT",
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  let currentComponent = null;
  if (currentPage === Pages.ABOUT) currentComponent = <About />;
  else if (currentPage === Pages.PORTFOLIO) currentComponent = <Portfolio />;
  else if (currentPage === Pages.EXPERIENCE) currentComponent = <Experience />;
  else if (currentPage === Pages.SKILLS) currentComponent = <Skills />;
  else if (currentPage === Pages.EDUCATION) currentComponent = <Education />;
  else if (currentPage === Pages.CONTACT) currentComponent = <Contact />;

  return (
    <div className="app">
      <header>
        <Presentation />
        <Icons />
      </header>
      <main>
        <Nav setCurrentPage={setCurrentPage} />
        <section>{currentComponent}</section>
      </main>
    </div>
  );
}

export default App;
