// A tiny, dependency-free icon set for the Skills section headers.
// Kept intentionally simple/monochrome so it stays subtle rather than
// decorative — line icons only, no brand/tech logos.

const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function CodeIcon() {
  return (
    <svg {...common}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg {...common}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <line x1="6.6" y1="7.2" x2="11" y2="16.2" />
      <line x1="17.4" y1="7.2" x2="13" y2="16.2" />
      <line x1="7" y1="6" x2="17" y2="6" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg {...common}>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 15 12 20 21 15" />
      <polyline points="3 11.5 12 16.5 21 11.5" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg {...common}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg {...common}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="6" y="13" width="3.2" height="7" />
      <rect x="10.4" y="9" width="3.2" height="11" />
      <rect x="14.8" y="4.5" width="3.2" height="15.5" />
    </svg>
  );
}

const ICONS = {
  code: CodeIcon,
  network: NetworkIcon,
  layers: LayersIcon,
  database: DatabaseIcon,
  chart: ChartIcon,
};

export default function SkillIcon({ name }) {
  const Icon = ICONS[name] || CodeIcon;
  return (
    <span className="skill-icon">
      <Icon />
    </span>
  );
}
