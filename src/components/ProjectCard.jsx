function ProjectCard({ project }) {
  return (
    <section className="project-card-section">
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
    </section>
  );
}

export default ProjectCard;