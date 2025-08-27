import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import './style.css';
import StarsBackground from './components/StarsBackground';


function App() {
  return (
    <>
      <StarsBackground />

      <section className="hero-section">
        <section className="top-section">
          <Navbar />
        </section>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </section>
    </>
  );
}

export default App;



