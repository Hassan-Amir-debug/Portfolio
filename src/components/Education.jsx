import { education } from "../data/resumeData.js";
import useReveal from "../hooks/useReveal.js";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div ref={ref} className="reveal education-list">
          {education.map((edu) => (
            <div key={edu.degree} className="education-item card">
              <div className="education-marker" aria-hidden="true" />
              <div>
                <div className="education-item-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="chip experience-period">{edu.period}</span>
                </div>
                <p className="education-school">{edu.school}</p>
                <ul className="education-details">
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
