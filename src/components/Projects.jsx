import { projects, profile } from "../data/resumeData.js";
import ProjectCard from "./ProjectCard.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Projects.css";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A selection of machine learning, software engineering, and data projects
            from my coursework and personal practice.
          </p>
        </div>

        <div ref={ref} className="reveal projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="projects-more">
          <a
            className="btn btn-outline"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            View More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
