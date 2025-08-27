import React, { useRef } from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 1,
      date: "2025 – Present",
      role: "AI Data Agent Intern",
      company: "Worksphere AI",
      points: [
        "Built a conversational SQL agent with React + Node.js.",
        "Integrated MySQL backend for business queries.",
        "Optimized prompts and APIs for faster response time."
      ],
      stack: "React, Node.js, MySQL, OpenAI API"
    },
    {
      id: 2,
      date: "June 2025 – August 2025",
      role: "Quant Research Intern",
      company: "CITeSERT",
      points: [
        "Analyzed NSE stock movement data with pandas/NumPy.",
        "Built pipelines for intraday move clustering.",
        "Generated research-ready CSVs mapping reasons to returns."
      ],
      stack: "Python, Pandas, NumPy, Scikit-learn"
    }
  ];

  const timelineRef = useRef(null);

  // Scroll line animation
  React.useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const sectionTop = timelineRef.current.offsetTop;
      const sectionHeight = timelineRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight * 0.7;

      if (scrollY > sectionTop) {
        const progress = Math.min(
          ((scrollY - sectionTop) / sectionHeight) * 100,
          100
        );
        timelineRef.current.style.setProperty("--line-height", `${progress}%`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="experience-section">
      <h1 className="experience-title">Experience</h1>

      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="timeline-dot"></div>

            <motion.div
              className="timeline-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="timeline-stack">Stack: {exp.stack}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
