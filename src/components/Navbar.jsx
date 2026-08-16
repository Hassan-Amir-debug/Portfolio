import { useEffect, useState } from "react";
import { profile } from "../data/resumeData.js";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          HA<span className="navbar-logo-dot">.</span>
        </a>

        <nav className="navbar-links navbar-links-desktop">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => handleClick(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm navbar-cta"
        >
          GitHub
        </a>

        <button
          className="navbar-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar-links navbar-links-mobile">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => handleClick(link.id)}>
              {link.label}
            </button>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
