import { profile } from "../data/resumeData.js";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-network" aria-hidden="true">
        <NetworkGraphic />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow">Available for internship</p>
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-title">{profile.title}</h2>
        <p className="hero-intro">{profile.heroIntro}</p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <a
            className="btn btn-outline"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

// A restrained neural-network motif: a handful of connected nodes,
// nodding to the AI/ML subject matter without being flashy.
function NetworkGraphic() {
  const nodes = [
    [40, 60], [140, 30], [230, 90], [90, 150], [200, 190],
    [320, 60], [360, 170], [280, 220], [30, 230], [160, 240],
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 5],
    [4, 7], [5, 6], [6, 7], [3, 8], [4, 9], [1, 5],
  ];

  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--color-primary)"
          strokeWidth="1"
          opacity="0.18"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 5 : 3.5}
          fill={i % 4 === 0 ? "var(--color-accent)" : "var(--color-primary)"}
          opacity="0.5"
        />
      ))}
    </svg>
  );
}
