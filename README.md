# Modern Portfolio - Kaushalendra Singh

A modern, component-based portfolio website with smooth animations and interactive project modals.

## Features

✨ **Component-Based Architecture** - Clean, modular code structure
🎨 **Modern Design** - Dark theme with gradient accents and glassmorphism
🎭 **Smooth Animations** - Fade-in effects and scroll-based animations
📱 **Responsive** - Works beautifully on all devices
🔄 **Interactive Project Cards** - Click to view detailed project information in modals
📍 **Animated Scroll Line** - Visual scroll progress indicator
🎯 **Social Icons** - Beautiful icons for social links
📅 **Cal.com Integration** - Easy scheduling with Cal.com button

## Tech Stack

- **Framework**: Next.js 15.1.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel

## Project Structure

```
portfolio/
├── public/
│   └── kaushal.png           # Your profile image
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and animations
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page component
│   ├── components/
│   │   ├── Hero.tsx          # Header with image and social links
│   │   ├── TechStack.tsx     # Technology stack display
│   │   ├── Experience.tsx    # Work experience section
│   │   ├── Projects.tsx      # Projects grid with modal
│   │   ├── ProjectCard.tsx   # Individual project card
│   │   ├── ProjectModal.tsx  # Project details modal
│   │   ├── BuildingFromZero.tsx
│   │   ├── CurrentlyExploring.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollLine.tsx    # Animated scroll indicator
│   ├── data/
│   │   ├── projects.ts       # Project data
│   │   ├── experience.ts     # Experience data
│   │   └── skills.ts         # Skills data
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Copy all files to your project directory

2. **IMPORTANT**: Add your profile image
   - Place your profile image as `public/kaushal.png`
   - Recommended size: 512x512px or larger
   - Format: PNG with transparent background

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update social media links
   - Modify Cal.com link
   - Change phone number

2. **Projects** (`src/data/projects.ts`):
   - Add/remove projects
   - Update GitHub and live links
   - Modify technologies and descriptions

3. **Experience** (`src/data/experience.ts`):
   - Update work experience
   - Modify company links and achievements

4. **Skills** (`src/data/skills.ts`):
   - Customize your tech stack
   - Update skill categories

### Styling

- Colors and gradients can be modified in individual components
- Global animations are in `src/app/globals.css`
- Tailwind configuration can be extended in `tailwind.config.ts`

## Key Features Explained

### Animated Scroll Line
- Fixed position line on the left side (desktop only)
- Shows scroll progress with a glowing dot
- Smooth animations using CSS transitions

### Project Modals
- Click any project card to view details
- Shows full project description
- Includes GitHub and live demo links
- Responsive modal design

### Gradient Cards
- Projects with gradients have `gradient` property in data
- Automatically applies gradient background
- Grid pattern overlay for visual interest

### Staggered Animations
- Components fade in sequentially
- Creates smooth, professional entrance effects
- Adjustable timing in component styles

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
```

Upload the `.next` folder and `public` directory to your hosting provider.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- Fast page loads with Next.js SSR
- Optimized images with Next.js Image component
- CSS animations for smooth 60fps performance

## Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast color scheme

## License

MIT License - Feel free to use this portfolio template for your own projects!

## Credits

Built with ❤️ by Kaushalendra Singh
