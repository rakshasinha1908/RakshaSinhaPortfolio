import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import './style.css';

function App() {
  return (
    <>
      

      <section className="hero-section">
        <section className="top-section">
          <Navbar />
        </section>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </section>
    </>
  );
}

export default App;
