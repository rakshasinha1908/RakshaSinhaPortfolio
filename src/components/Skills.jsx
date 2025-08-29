import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt,  } from "react-icons/fa";
import { SiMysql, SiJavascript, SiHtml5, SiCss3} from "react-icons/si";
import flaskLogo from "../assets/logos/flask.png";
import pandasLogo from "../assets/logos/pandas.png";
import githubLogo from "../assets/logos/github.png";
import numpyLogo from "../assets/logos/numpy.png";
import restapiLogo from "../assets/logos/restapi.png";
import vscodeLogo from "../assets/logos/vscode.webp";
import vercelLogo from "../assets/logos/vercel.png";
import viteLogo from "../assets/logos/vite.png";
import pythonLogo from "../assets/logos/python.png";
import javaLogo from "../assets/logos/java.png";
import framermotionLogo from "../assets/logos/framer-motion.svg"

const skillsData = {
  Frontend: [
    { name: "React", icon: <FaReact className="icon react"/> },
    { name: "JavaScript", icon: <SiJavascript className="icon js"/> },
    { name: "HTML5", icon: <SiHtml5 className="icon html"/> },
    { name: "CSS3", icon: <SiCss3 className="icon css"/> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="icon node"/> },
    { name: "Flask", icon: <img src={flaskLogo} alt="Flask" className="custom-icon" /> },
    { name: "REST APIs", icon: <img src={restapiLogo} alt="REST API" className="custom-icon" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="icon mysql"/> },
  ],
  AI_ML: [
    { name: "Python", icon: <img src={pythonLogo} alt="Python" className="custom-icon" /> },
    { name: "NumPy", icon: <img src={numpyLogo} alt="Numpy" className="custom-icon" /> },
    { name: "Pandas", icon: <img src={pandasLogo} alt="Pandas" className="custom-icon" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="icon git"/> },
    { name: "GitHub", icon: <img src={githubLogo} alt="Github" className="custom-icon" /> },
    { name: "VS Code", icon: <img src={vscodeLogo} alt="VS Code" className="custom-icon" /> },
    { name: "Vercel", icon: <img src={vercelLogo} alt="Vercel" className="custom-icon" /> },
    { name: "Vite", icon: <img src={viteLogo} alt="Vite" className="custom-icon" /> },
    { name: "Framer Motion", icon: <img src={framermotionLogo} alt="Framer Motion" className="custom-icon" /> },
  ],
  Languages: [
    { name: "Python", icon: <img src={pythonLogo} alt="Python" className="custom-icon" /> },
    { name: "Java", icon: <img src={javaLogo} alt="Java" className="custom-icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="icon js"/> },
  ]
};

const categories = Object.keys(skillsData);

function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Core Skills</h1>

        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category.replace("_", "/")}
            </button>
          ))}
        </div>

        <div className="skills-grid-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} 
              className="skills-grid"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {skillsData[activeTab].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;

