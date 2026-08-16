import { profile, softSkills } from "../data/resumeData.js";
import useReveal from "../hooks/useReveal.js";
import QualityIcon from "./QualityIcon.jsx";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about">
      <div className="container">
        <div ref={ref} className="reveal about-grid">
          <div>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title">A closer look</h2>
            <p className="about-summary">{profile.aboutText}</p>

            <div className="about-facts">
              <span className="about-fact">BS Artificial Intelligence</span>
              <span className="about-fact-divider" aria-hidden="true" />
              <span className="about-fact">UMT</span>
              <span className="about-fact-divider" aria-hidden="true" />
              <span className="about-fact">6 semesters completed</span>
            </div>
          </div>

          <div className="about-side">
            <h3 className="about-side-title">Beyond the Code</h3>
            <div className="quality-grid">
              {softSkills.map((skill) => (
                <div key={skill.title} className="quality-item">
                  <QualityIcon name={skill.icon} />
                  <h4 className="quality-title">{skill.title}</h4>
                  <p className="quality-desc">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
