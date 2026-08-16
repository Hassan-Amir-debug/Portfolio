// ─────────────────────────────────────────────────────────────
// All of Hassan's info lives here. Edit this file to update
// the content shown across the whole portfolio.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Hassan Amir",
  title: "AI Undergraduate | Machine Learning | Software Development",
  email: "hasanaamir032@gmail.com",
  phone: "0310-1462680",
  phoneHref: "tel:+923101462680",
  github: "https://github.com/Hassan-Amir-debug",
  githubHandle: "github.com/Hassan-Amir-debug",
  linkedin: "https://www.linkedin.com/in/hasanaamir032/",
  linkedinHandle: "linkedin.com/in/hasanaamir032",
  location: "Lahore, Pakistan",
  aboutText:
    "I'm currently pursuing a BS in Artificial Intelligence at the University of Management and Technology (UMT). Through coursework and personal projects, I've moved from foundational programming and data structures into machine learning, deep learning, and applied software development — along the way picking up databases, mobile development with Flutter, and data analysis. I like projects that force me to connect theory with a working result, and I'm looking for an internship where I can keep doing exactly that.",
  heroIntro:
    "Building practical AI and software projects with Python, C++, and modern development tools. Interested in machine learning, deep learning, and turning technical concepts into working applications.",
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["Python", "C++", "Dart", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    icon: "network",
    items: ["Machine Learning", "Deep Learning", "PyTorch", "NumPy", "Pandas"],
  },
  {
    category: "Development",
    icon: "layers",
    items: [
      "Flutter",
      "FastAPI",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
    ],
  },
  {
    category: "Data & Visualization",
    icon: "chart",
    items: [
      "Data Analysis",
      "Data Preprocessing",
      "Data Visualization",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],
  },
  {
    category: "Tools",
    icon: "database",
    items: ["GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

// A repo URL that hasn't been provided yet. ProjectCard.jsx checks for this
// value and renders a clearly marked "coming soon" state instead of a dead
// link. All 6 featured projects below have real repository links; this is
// kept only so future projects added without a link fail gracefully.
export const REPO_PLACEHOLDER = "";

// The 6 featured projects shown on the site — only projects with a real,
// confirmed GitHub repository are included here. "number" and "category"
// drive the small eyebrow label on each card (e.g. "01 — MACHINE LEARNING").
export const projects = [
  {
    number: "01",
    category: "Machine Learning",
    name: "Autism Spectrum Disorder Prediction System",
    description:
      "Machine learning system for predicting ASD indicators from structured screening data.",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "SVM"],
    highlight:
      "Includes data preprocessing, comparison of multiple machine learning models, and selection of the strongest-performing model.",
    repo: "https://github.com/Hassan-Amir-debug/ASD-Risk-Prediction",
  },
  {
    number: "02",
    category: "Data Analysis",
    name: "Academic Insights Dashboard",
    description:
      "Student performance analysis dashboard built using Python data libraries.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    highlight:
      "Transforms student academic data into useful performance insights through data processing and visualization.",
    repo: "https://github.com/Hassan-Amir-debug/academic_insights",
  },
  {
    number: "03",
    category: "Database",
    name: "Food Delivery Management System",
    description:
      "Relational database system designed to manage food delivery operations.",
    tech: ["SQL", "Database Management", "Relational Database"],
    highlight:
      "Models the complete workflow of a food delivery system using connected relational database entities.",
    repo: "https://github.com/Hassan-Amir-debug/Food-Delivery-Management-System",
  },
  {
    number: "04",
    category: "Object-Oriented Programming",
    name: "Parking Lot Management System",
    description:
      "C++ parking management application built using object-oriented programming.",
    tech: ["C++", "Object-Oriented Programming"],
    highlight:
      "Applies core OOP concepts to organize parking operations within a structured C++ application.",
    repo: "https://github.com/Hassan-Amir-debug/Parking-Lot-Management-System-Cpp",
  },
  {
    number: "05",
    category: "Algorithms",
    name: "Smart Route Planner",
    description:
      "Shortest-route planning application built using graph algorithms.",
    tech: ["C++", "Data Structures & Algorithms", "Dijkstra's Algorithm"],
    highlight: "Uses Dijkstra's algorithm to compute the shortest path between nodes.",
    repo: "https://github.com/Hassan-Amir-debug/Smart-Route-Planner",
  },
  {
    number: "06",
    category: "Mobile Development",
    name: "Flutter Wallpaper Application",
    description:
      "Responsive cross-platform wallpaper browsing application built with Flutter.",
    tech: ["Flutter", "Dart", "Mobile Development"],
    highlight:
      "Provides a responsive cross-platform wallpaper browsing experience using a single Flutter codebase.",
    repo: "https://github.com/Hassan-Amir-debug/OG_Wallpaper-Mobile-App-Development",
  },
];

// Other projects from the resume that don't yet have a public repository
// link, so they're left off the homepage rather than shown with a dead or
// placeholder link. Visible via "View More on GitHub" instead.
export const otherProjects = [
  "Cat vs Dog Image Classification",
  "Plant Disease Detection using ANN",
  "Student Management System (C++)",
];

export const experience = [
  {
    org: "Furniture Business (Online Side Venture)",
    period: "2025 — Present",
    points: [
      "Operate an online furniture side venture, sourcing products and managing the end-to-end sales process.",
      "Promote products online and handle customer orders and inquiries directly.",
      "Built practical experience in communication, organization, and small-scale business operations alongside academic studies.",
    ],
    note: "Side venture — run alongside full-time AI studies.",
  },
];

export const education = [
  {
    degree: "BS Artificial Intelligence",
    school: "University of Management and Technology (UMT)",
    period: "In Progress",
    details: [
      "CGPA: 2.90 / 4.00",
      "Completed 6 semesters — currently on summer break",
    ],
  },
];

// "Beyond the Code" grid in the About section. Each item pairs a strength
// from the resume with a short, plain-language description of what it
// looks like in practice.
export const softSkills = [
  {
    title: "Problem Solving",
    description: "Breaking problems into smaller, practical solutions.",
    icon: "puzzle",
  },
  {
    title: "Analytical Thinking",
    description: "Looking at information logically before making decisions.",
    icon: "target",
  },
  {
    title: "Communication",
    description: "Explaining ideas clearly and working effectively with others.",
    icon: "chat",
  },
  {
    title: "Teamwork",
    description: "Collaborating, sharing ideas, and contributing toward a common goal.",
    icon: "people",
  },
];
