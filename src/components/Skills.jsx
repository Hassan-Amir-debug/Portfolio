import { skills } from "../data/resumeData.js";
import useReveal from "../hooks/useReveal.js";
import SkillIcon from "./SkillIcon.jsx";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            Tools and technologies I've used across coursework and personal projects.
          </p>
        </div>

        <div ref={ref} className="reveal skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card card">
              <div className="skill-card-header">
                <SkillIcon name={group.icon} />
                <h3 className="skill-card-title">{group.category}</h3>
              </div>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
