# RailSmart AI Landing Page

A modern, responsive landing page built with React, shadcn/ui, and Tailwind CSS for an AI-powered railway exam preparation platform.

## Project Structure

```
.
├── App.jsx                          # Main application component
└── components/
    └── landing
       ├── Header.jsx                  # Site header (Logo + Navigation)
       ├── Logo.jsx                    # Reusable logo component
       ├── Navigation.jsx              # Main navigation menu
       ├── Hero.jsx                    # Hero section with headline and CTA
       ├── DashboardMockup.jsx         # Dashboard visualization component
       ├── TrustedBy.jsx               # Brand trust indicators section
       ├── Features.jsx                # Features showcase section
       ├── FeatureCard.jsx             # Individual feature card component
       ├── Comparison.jsx              # Comparison table section
       ├── Testimonials.jsx            # Testimonials section
       ├── TestimonialCard.jsx         # Individual testimonial card
       ├── CTA.jsx                     # Call-to-action section
       ├── Fotter.tsx                  # Footer section
       └──README.md                    # This file
```

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   └── Navigation
├── Hero
│   └── DashboardMockup
├── TrustedBy
├── Features
│   └── FeatureCard (×6)
├── Comparison
├── Testimonials
│   └── TestimonialCard (×3)
├── CTA
└── Footer
    └── Logo
```

## Components Overview

### Core Layout Components

- **App.jsx**: Main component that assembles all sections
- **Header.jsx**: Sticky header with logo and navigation
- **Footer.jsx**: Footer with links and branding

### Reusable Components

- **Logo.jsx**: Branded logo component used in header and footer
- **Navigation.jsx**: Navigation menu with links and CTA button
- **FeatureCard.jsx**: Card component for displaying features
- **TestimonialCard.jsx**: Card component for customer testimonials
- **DashboardMockup.jsx**: Visual dashboard representation

### Section Components

- **Hero.jsx**: Landing hero with headline, description, and CTAs
- **TrustedBy.jsx**: Social proof with partner logos
- **Features.jsx**: Grid of product features
- **Comparison.jsx**: Comparison table vs traditional methods
- **Testimonials.jsx**: Customer success stories
- **CTA.jsx**: Final call-to-action section

## Features

- ✅ Fully responsive design
- ✅ Component-based architecture
- ✅ Reusable UI components
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui component library
- ✅ Lucide React icons
- ✅ Smooth animations and transitions
- ✅ Semantic HTML structure
- ✅ SEO-friendly markup

## Installation

1. Install dependencies:

```bash
npm install
```

2. Make sure you have shadcn/ui components installed:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

3. Install Lucide React for icons:

```bash
npm install lucide-react
```

## Usage

Import and use the main App component:

```jsx
import App from "./App";

function Root() {
  return <App />;
}
```

Or use individual components:

```jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function CustomPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
```

## Customization

### Modify Colors

Update Tailwind classes in components. Main colors used:

- Primary: `blue-600`
- Success: `emerald-600`
- Accent: `yellow-400`

### Update Content

Each component has its data defined locally. For example, to update features:

```jsx
// In Features.jsx
const features = [
  {
    icon: <YourIcon />,
    title: "Your Feature",
    description: "Your description",
  },
  // ... more features
];
```

### Add New Sections

Create a new component in the `components/` directory and import it in `App.jsx`:

```jsx
import NewSection from "./components/NewSection";

export default function App() {
  return (
    <div>
      {/* ... existing sections ... */}
      <NewSection />
    </div>
  );
}
```

## Responsive Breakpoints

The design uses Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Credits

Built with:

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
