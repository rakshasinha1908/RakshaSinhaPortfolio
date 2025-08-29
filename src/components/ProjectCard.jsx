import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.section 
      className="project-card-section"
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item, index) => (
            <span key={index} className="tech-badge">{item}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectCard;

