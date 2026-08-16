// Small line-icon set for the "Beyond the Code" grid in the About section.
// Same minimal, monochrome approach as SkillIcon.jsx.

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

function PuzzleIcon() {
  return (
    <svg {...common}>
      <path d="M9 4h4a1 1 0 0 1 1 1v2.2a1.6 1.6 0 0 0 2.6 1.25c.8-.65 2.05-.1 2.05.95V13a1 1 0 0 1-1 1h-2.2a1.6 1.6 0 0 0-1.25 2.6c.65.8.1 2.05-.95 2.05H10a1 1 0 0 1-1-1v-2.2a1.6 1.6 0 0 0-2.6-1.25c-.8.65-2.05.1-2.05-.95V10a1 1 0 0 1 1-1h2.2A1.6 1.6 0 0 0 8.8 6.15C8.15 5.35 8.7 4 9.75 4Z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg {...common}>
      <path d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3.2V16H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg {...common}>
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16.2" cy="9" r="2.1" />
      <path d="M3.5 19c.4-2.9 2.4-4.6 5-4.6s4.6 1.7 5 4.6" />
      <path d="M14.3 14.9c2 .2 3.5 1.7 3.8 4.1" />
    </svg>
  );
}

const ICONS = {
  puzzle: PuzzleIcon,
  target: TargetIcon,
  chat: ChatIcon,
  people: PeopleIcon,
};

export default function QualityIcon({ name }) {
  const Icon = ICONS[name] || PuzzleIcon;
  return (
    <span className="quality-icon">
      <Icon />
    </span>
  );
}
