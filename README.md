# CVWeb — Portfolio & CV Website

Personal portfolio website for Pol García Moreno, built as a single-page application with React. It showcases professional experience, education, projects, and skills, and includes a contact form and an AI chat section.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Email | EmailJS (`@emailjs/browser`) |
| Scroll detection | `react-intersection-observer` |
| Build tool | Create React App (`react-scripts`) |

---

## Project Structure

```
CVWeb/
├── public/                      # Static assets served as-is
├── src/
│   ├── index.js                 # React entry point
│   ├── index.css                # Tailwind directives and base resets
│   ├── App.js                   # Root component — composes all sections
│   ├── context/
│   │   └── LanguageContext.js   # i18n context provider (language state, t(), toggleLanguage)
│   ├── hooks/
│   │   └── useTranslation.js    # Hook to consume LanguageContext
│   ├── data/
│   │   ├── translations.js      # Translation strings (en / es / ca)
│   │   ├── about.js             # About section data
│   │   ├── contact.js           # Contact details and social links
│   │   ├── education.js         # Education items
│   │   ├── experience.js        # Work experience items
│   │   ├── nav.js               # Navigation links
│   │   ├── projects.js          # Portfolio project data
│   │   └── skills.js            # Skill categories and items
│   ├── components/
│   │   ├── Navbar.js            # Fixed top navigation bar with mobile menu
│   │   ├── FlagSelector.js      # Language switcher dropdown
│   │   ├── Hero.js              # Full-screen landing section with OrbitMenu
│   │   ├── OrbitMenu.js         # Animated orbital navigation around avatar
│   │   ├── About.js             # Short personal bio section
│   │   ├── Experience.js        # Work experience timeline
│   │   ├── Education.js         # Academic background timeline
│   │   ├── Projects.js          # Portfolio project cards
│   │   ├── Skills.js            # Technical skills by category
│   │   ├── Contact.js           # Contact form (EmailJS) + social links
│   │   ├── ChatSection.js       # AI chat section
│   │   └── Footer.js            # Page footer
│   ├── styles/
│   │   └── global.css           # Global component styles and CSS utilities
│   └── utils/
│       ├── animations.js        # Reusable Framer Motion variant factories
│       └── emailService.js      # EmailJS send wrapper
├── Media/                       # CV and cover letter PDFs (source files)
├── build/                       # Production build output (git-tracked)
├── .env.example                 # Environment variable template
├── extract_cv.js                # Node script to extract text from PDF CVs
├── tailwind.config.js           # Tailwind configuration
└── package.json
```

---

## Architecture Overview

### Component Tree

```
App
└── LanguageProvider          (i18n context)
    ├── Navbar
    │   └── FlagSelector
    ├── Hero
    │   └── OrbitMenu
    ├── About
    ├── Experience
    ├── Education
    ├── Projects
    ├── Skills
    ├── Contact
    ├── ChatSection
    └── Footer
```

### Internationalisation (i18n)

The site supports **English, Spanish, and Catalan**. The language state lives in `src/context/LanguageContext.js`, which exposes:

- `language` — current language code (`en` | `es` | `ca`)
- `setLanguage` / `toggleLanguage` — language changers
- `t(key)` — translation helper that resolves dot-separated keys against `src/data/translations.js`, with automatic fallback to `en` if the active language is missing

Any component that needs translated text imports `useTranslation()` from `src/hooks/useTranslation.js`.

### Page Layout

The site is a **single scrollable page**. Each section has a corresponding HTML `id` attribute so the navbar and the `OrbitMenu` can scroll to it smoothly with `scrollIntoView`.

| Section | id |
|---|---|
| Hero | `hero` |
| About | `about` |
| Experience | `experience` |
| Education | `education` |
| Projects | `projects` |
| Skills | `skills` |
| Contact | `contact` |
| Chat | `chat` |

### Animations

All entry animations are handled by **Framer Motion**. Reusable variant factories (`fadeUpContainer`, `fadeUpItem`, `fadeLeftItem`) are defined in `src/utils/animations.js` and instantiated at module scope in each component to avoid unnecessary re-creation on every render. Scroll-triggered animations use `react-intersection-observer`.

### Contact Form

`Contact.js` sends form submissions via **EmailJS** without a backend. Credentials are injected through environment variables at build time:

```
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

Copy `.env.example` to `.env` and fill in the values from your EmailJS dashboard before running or deploying.

### AI Chat Section

`ChatSection.js` renders a chat UI (input bar, bot avatar, welcome bubble) connected to the Claude API for CV-based Q&A.

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy and fill environment variables
cp .env.example .env

# Start the development server
npm start

# Build for production
npm run build
```

The development server runs on `http://localhost:3000`.

---

## Deployment

The `build/` directory is committed to the repository and contains the latest production build. It can be served directly from any static host (GitHub Pages, Netlify, Vercel, etc.) without a build step on the server.
