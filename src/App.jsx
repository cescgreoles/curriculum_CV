import "./index";
import "./App.scss";
import Presentation from "./components/Presentation";
import Nav from "./components/Nav";
import About from "./components/About";
// import Experience from "./components/Experience";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <div className="app">
      <header>
        <Presentation setCurrentRoute={setCurrentRoute} />
      </header>
      <main>
        <Nav setCurrentRoute={setCurrentRoute} />
        <section>
          <About />
        </section>
      </main>
      <footer>
        <Footer setCurrentRoute={setCurrentRoute} />
      </footer>
    </div>
  );
}

export default App;
