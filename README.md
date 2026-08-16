# Hassan Amir — Portfolio

A personal portfolio website built with React + Vite, showcasing AI/ML and software
development projects, skills, education, and experience — built for internship
applications.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org/) (version 18 or later) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

Other commands:

```bash
npm run build    # Builds a production-ready version into /dist
npm run preview  # Preview the production build locally
```

## 2. Where to edit your information

Almost everything on the site is driven from a single file:

```
src/data/resumeData.js
```

Edit this file to update:

- `profile` — name, title, email, phone, GitHub link, LinkedIn link, about text, hero intro
- `skills` — skill categories, icons, and items
- `projects` — project number, category, name, description, tech stack, optional
  highlight, and `repo` link (see below)
- `experience` — work / side-venture history
- `education` — degree, school, CGPA, semester progress
- `softSkills` — the strengths listed in the About section

You generally won't need to touch the component files (in `src/components/`) unless
you want to change the layout or wording of a section.

## 3. Adding your project repository links

Each project card links to its own GitHub repository via the `repo` field in
`src/data/resumeData.js`. These are currently left as empty placeholders
(`REPO_PLACEHOLDER`), so each card shows "Repository link coming soon" instead of a
broken or misleading link.

To add a real link, open `src/data/resumeData.js` and fill in the `repo` field for
that project, e.g.:

```js
repo: "https://github.com/Hassan-Amir-debug/asd-prediction-system",
```

Once a `repo` value is set, that card automatically switches to a clickable
"View Repository ↗" button.

## 4. Your LinkedIn URL

Your LinkedIn profile is already set in `src/data/resumeData.js`:

```js
linkedin: "https://www.linkedin.com/in/hasanaamir032/",
```

If it ever changes, update the `linkedin` (and `linkedinHandle`, the display text)
fields on the `profile` object.

## 5. Pushing to GitHub

```bash
# From inside the portfolio/ folder
git init
git add .
git commit -m "Initial portfolio"

# Create a new repository on GitHub first, then:
git branch -M main
git remote add origin https://github.com/Hassan-Amir-debug/YOUR-REPO-NAME.git
git push -u origin main
```

If you'd like the live site hosted for free, both
[Vercel](https://vercel.com) and [Netlify](https://netlify.com) can deploy this
project directly from your GitHub repo — just import the repo and use the default
Vite build settings (`npm run build`, output directory `dist`).

## Project structure

```
portfolio/
├── src/
│   ├── components/          # One component per section, plus ProjectCard & SkillIcon
│   ├── data/resumeData.js   # All content — edit this to update the site
│   ├── hooks/useReveal.js   # Scroll-reveal animation hook
│   ├── App.jsx               # Composes all sections
│   ├── main.jsx               # React entry point
│   └── index.css              # Design tokens + global styles
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- All content is sourced from the resume provided — no experience, results, or
  technologies have been invented. Anywhere information was missing (like project
  repository links), a clearly labeled placeholder is used instead of a fake link.
- Project cards are text-based (no screenshots), designed for a technical/AI
  portfolio audience.
- The design respects `prefers-reduced-motion` and is fully responsive from mobile
  to desktop.
