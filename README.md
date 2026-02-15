Modern Portfolio - Kaushalendra Singh
A modern, component‑based portfolio website with smooth animations, interactive project modals, and a sleek scroll line. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

https://public/kaushal.jpeg

Features
Component‑Based Architecture – Clean, modular code for easy maintenance

Modern Dark Design – Gradient accents, glassmorphism, and grid backgrounds

Smooth Animations – Fade‑in effects, scroll‑triggered animations, and a pulsing scroll line

Responsive Layout – Perfectly adapted for mobile, tablet, and desktop

Interactive Project Cards – Click any project to open a detailed modal with live demo and GitHub links

Animated Scroll Line – A progress bar on the left with section markers, hover percentage, and a playful "like zig sometimes" message

Resume Download – One‑click access to your PDF resume

Social Icons – Beautiful hover‑expand icons for X, LinkedIn, GitHub, Email, and more

Cal.com Integration – Schedule calls directly from the hero section

Tech Stack
Framework: Next.js 15.1.4

Language: TypeScript

Styling: Tailwind CSS v4 + CSS animations

Icons: React Icons (Fa6)

Animations: Framer Motion (for scroll line)

Deployment: Vercel (recommended)

Project Structure
text
portfolio/
├── public/
│   ├── kaushal.jpeg          # Your profile image
│   └── Kaushal_resume.pdf    # Your downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, animations, and Tailwind imports
│   │   ├── layout.tsx        # Root layout with metadata and fonts
│   │   └── page.tsx          # Main page assembling all sections
│   ├── components/
│   │   ├── Hero.tsx          # Header with image, name, and social links
│   │   ├── TechStack.tsx     # Technology stack badges
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Projects.tsx      # Grid of project cards + modal integration
│   │   ├── ProjectCard.tsx   # Individual project preview card
│   │   ├── ProjectModal.tsx  # Full‑screen modal with details
│   │   ├── BuildingFromZero.tsx
│   │   ├── CurrentlyExploring.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx        # Categorized technical skills
│   │   ├── Footer.tsx        # Social icons (only icons with hover text)
│   │   └── ScrollLine.tsx    # Animated scroll indicator + markers
│   ├── data/
│   │   ├── projects.ts       # Array of project objects
│   │   ├── experience.ts     # Work history
│   │   └── skills.ts         # Skills by category + flat tech stack
│   └── types/
│       └── index.ts          # TypeScript interfaces (Project, Experience, Skill)
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js         # Tailwind v4 PostCSS config
└── README.md                 # You are here!
Getting Started
Prerequisites
Node.js 18+ and npm/yarn installed

Installation
Clone or copy this repository into your project folder.

Add your assets:

Place your profile image at public/kaushal.jpeg (recommended size: 512×512px or larger).

Place your resume PDF at public/Kaushal_resume.pdf (or update the filename in Hero.tsx).

Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
Open http://localhost:3000 in your browser – you should see your portfolio live!

Customization
Personal Information
Hero.tsx – Update social links, Cal.com URL, phone number, and the resume filename if needed.

data/experience.ts – Add/edit your work experiences and achievements.

data/projects.ts – Modify project details: titles, descriptions, technologies, GitHub/live links, and optional gradient classes.

data/skills.ts – Change your skill categories and items.

Styling
globals.css – Contains custom animations (fadeInUp, scaleIn), scrollbar styling, and the grid background. You can tweak colors, animation durations, etc.

Tailwind – Most styling is done with utility classes directly in components. To extend the theme, modify tailwind.config.ts (if you keep it) or use CSS variables in globals.css with the @theme block.

Scroll Line Enhancements
The scroll line (ScrollLine.tsx) automatically detects all <section id="..."> elements and creates clickable markers.

Add id attributes to any new sections you create to have them appear on the line.

The "like zig sometimes" message at the bottom can be changed or removed easily.

Building for Production
bash
npm run build
npm start
Deployment (Vercel)
The easiest way to deploy:

Push your code to a GitHub repository.

Import the project on Vercel.

Vercel will automatically detect Next.js and set up the build.

Your site is live in seconds!

Performance & Accessibility
Lighthouse Score – Consistently 90+ (fast loads, optimized images, semantic HTML).

Keyboard Navigation – All interactive elements are focusable and operable.

ARIA Labels – Used where appropriate for screen readers.

High Contrast – Dark background with light text ensures readability.

License
This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

Acknowledgements
Built with ❤️ by Kaushalendra Singh. Icons by React Icons. Inspired by modern developer portfolios and the beauty of clean code.