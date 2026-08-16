import { profile } from "../data/resumeData.js";
import useReveal from "../hooks/useReveal.js";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={ref} className="reveal contact-box">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's talk</h2>
            <p className="section-sub">
              Open to internship opportunities in AI, machine learning, and software
              development. Feel free to reach out.
            </p>
          </div>

          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">{profile.email}</span>
            </a>

            <a className="contact-link" href={profile.phoneHref}>
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">{profile.phone}</span>
            </a>

            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">{profile.githubHandle}</span>
            </a>

            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">{profile.linkedinHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
