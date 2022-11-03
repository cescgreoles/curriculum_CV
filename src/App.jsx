import "./index";
import "./App.scss";
import Presentation from "./components/Presentation";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

export const Pages = {
  ABOUT: "ABOUT",
  PORTFOLIO: "PORTFOLIO",
  EXPERIENCE: "EXPERIENCE",
  CONTACT: "CONTACT",
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.ABOUT);

  let currentComponent = null;
  if (currentPage === Pages.ABOUT) currentComponent = <About />;
  else if (currentPage === Pages.PORTFOLIO) currentComponent = <Portfolio />;
  else if (currentPage === Pages.EXPERIENCE) currentComponent = <Experience />;
  else if (currentPage === Pages.CONTACT) currentComponent = <Contact />;

  return (
    <div className="app">
      <header>
        <Presentation />
      </header>
      <main>
        <Nav setCurrentPage={setCurrentPage} />
        <section>{currentComponent}</section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
