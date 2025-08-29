import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import './style.css';
import StarsBackground from './components/StarsBackground';
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import RheaAssistant from "./components/RheaAssistant";

function App() {
  return (
    <>
      <StarsBackground />
 
      <section className="hero-section">
        <section className="top-section">
          <Navbar />
        </section>
        <Hero id="home"/>
        <About id="about"/>
        <Skills />
        <Experience />
        <Projects id="projects"/>
        <Contact id="contact"/>
        <Footer />
        <RheaAssistant />
      </section>
    </>
  );
}

export default App;



