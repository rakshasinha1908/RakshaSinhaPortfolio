import React, { useRef } from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 1,
      date: "June 2025 – August 2025",
      role: "AI Quant Research Intern",
      company: "Citesert",
      points: [
        "Analyzed 50,000+ rows of NSE stock movement data using Python (pandas/NumPy), extracting intraday trends and anomalies.",
        "Automated data collection & preprocessing scripts, reducing manual effort by ~40% and ensuring reproducible research pipelines.",
        "Designed clustering pipelines to group intraday stock moves, enabling pattern recognition across 200+ NSE symbols.",
        "Integrated LLMs (Perplexity, Gemini, Claude) for automating research tasks such as summarizing market drivers and mapping textual reasons to stock returns.",
        "Generated research-ready CSV datasets that linked qualitative factors with quantitative outcomes, improving downstream model usability."
      ],
      stack: "Python, Pandas, NumPy, Scikit-learn, LLM APIs (Perplexity, Gemini, Claude)"
    },
    {
      id: 2,
      date: "June 2025 – December 2025",
      role: "AI/ML Intern – LLM Deployment",
      company: "Prodigal AI",
      points: [
        "Researched and implemented Transformer-based architectures (BERT, GPT) and Retrieval-Augmented Generation (RAG), improving factual accuracy and reducing hallucination rates by ~25% in prototype tests.",
        "Integrated HuggingFace inference APIs into deployment workflows, enabling real-time response generation with latency reduced by ~30% via caching and optimization strategies.",
        "Designed and tested retrieval pipelines using FAISS & Pinecone vector databases, achieving efficient similarity search across 10,000+ embeddings."
      ],
      stack: "Python, PyTorch, HuggingFace Transformers, FAISS, Pinecone, Git"
    }
  ];

  const timelineRef = useRef(null);

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
    <section className="outer-exp">
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
              delay: index * 0.2,
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
    </section>
  );
}

export default Experience;
