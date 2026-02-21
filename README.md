# CVWeb — Portfolio & CV Website

Personal portfolio website for Pol García Moreno, built as a single-page application with React. It showcases professional experience, education, projects, and skills, and includes a contact form and a placeholder AI chat section.

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
├── public/                  # Static assets served as-is
├── src/
│   ├── index.js             # React entry point
│   ├── App.js               # Root component — composes all sections
│   ├── App.css              # Global styles and CSS custom properties
│   ├── index.css            # Tailwind directives and base resets
│   ├── LanguageContext.js   # Internationalisation (i18n) context & hook
│   ├── translations.js      # Translation strings (en / es / ca)
│   └── components/
│       ├── Navbar.js        # Fixed top navigation bar with mobile menu
│       ├── FlagSelector.js  # Language switcher (flag buttons)
│       ├── Hero.js          # Full-screen landing section with OrbitMenu
│       ├── OrbitMenu.js     # Animated orbital navigation around avatar
│       ├── ChatSection.js   # AI chat placeholder (UI only, coming soon)
│       ├── About.js         # Short personal bio section
│       ├── Experience.js    # Work experience timeline
│       ├── Education.js     # Academic background
│       ├── Projects.js      # Portfolio project cards
│       ├── Skills.js        # Technical skills display
│       ├── Contact.js       # Contact form (EmailJS) + social links
│       └── Footer.js        # Page footer
├── Media/                   # CV and cover letter PDFs (source files)
├── build/                   # Production build output (git-tracked)
├── .env.example             # Environment variable template
├── extract_cv.js            # Node script to extract text from PDF CVs
├── tailwind.config.js       # Tailwind configuration
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
    ├── ChatSection
    ├── About
    ├── Experience
    ├── Education
    ├── Projects
    ├── Skills
    ├── Contact
    └── Footer
```

### Internationalisation (i18n)

The site supports **English, Spanish, and Catalan**. The language state lives in `LanguageContext.js`, which exposes:

- `language` — current language code (`en` | `es` | `ca`)
- `setLanguage` / `toggleLanguage` — language changers
- `t(key)` — translation helper that resolves dot-separated keys against `translations.js`

Any component that needs translated text imports `useTranslation()` from `LanguageContext.js`.

### Page Layout

The site is a **single scrollable page**. Each section has a corresponding HTML `id` attribute so the navbar and the `OrbitMenu` can scroll to it smoothly with `scrollIntoView`.

| Section | id |
|---|---|
| Hero | `hero` |
| Chat | `chat` |
| About | `about` |
| Experience | `experience` |
| Education | `education` |
| Projects | `projects` |
| Skills | `skills` |
| Contact | `contact` |

### Animations

All entry animations are handled by **Framer Motion**. Most components use `motion.div` with `whileInView` + `react-intersection-observer` to trigger animations when the section enters the viewport. The `Hero` section uses a staggered children animation. `OrbitMenu` uses CSS transforms + Framer Motion for the orbit effect.

### Contact Form

`Contact.js` sends form submissions via **EmailJS** without a backend. Credentials are injected through environment variables at build time:

```
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

Copy `.env.example` to `.env` and fill in the values from your EmailJS dashboard before running or deploying.

### AI Chat Section

`ChatSection.js` renders the chat UI shell (input bar, bot avatar, welcome bubble) but the AI model integration is **not yet implemented**. The input is disabled and marked as "coming soon".

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
