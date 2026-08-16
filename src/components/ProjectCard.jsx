import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const hasRepo = Boolean(project.repo);

  return (
    <article className="project-card card">
      <div className="project-eyebrow">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="chip chip-outline">
            {t}
          </span>
        ))}
      </div>

      {project.highlight && (
        <div className="project-highlight">
          <span className="project-highlight-label">Key highlight</span>
          <p>{project.highlight}</p>
        </div>
      )}

      <div className="project-footer">
        {hasRepo ? (
          <a
            className="project-repo-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            View Repository <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-repo-link project-repo-pending">
            Repository link coming soon
          </span>
        )}
      </div>
    </article>
  );
}
