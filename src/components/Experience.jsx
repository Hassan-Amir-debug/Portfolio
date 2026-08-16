import { experience } from "../data/resumeData.js";
import useReveal from "../hooks/useReveal.js";
import "./Experience.css";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Work &amp; ventures</h2>
        </div>

        <div ref={ref} className="reveal experience-list">
          {experience.map((job) => (
            <div key={job.org} className="experience-item card">
              <div className="experience-item-header">
                <div>
                  <h3 className="experience-org">{job.org}</h3>
                </div>
                <span className="chip chip-outline experience-period">{job.period}</span>
              </div>

              <ul className="experience-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {job.note && <p className="experience-note">{job.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
