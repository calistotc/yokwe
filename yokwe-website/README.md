# Yokwe Attorneys Inc. Website

A modern, responsive website for Yokwe Attorneys Inc., a distinguished law firm delivering unparalleled legal services across the Republic of South Africa.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and React Router
- **Beautiful UI**: Tailwind CSS with custom design system following 60/30/10 color rule
- **Dark/Light Theme**: Seamless theme switching with user preference persistence
- **Smooth Animations**: Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **5 Comprehensive Pages**:
  - Home: Hero section, mission, vision, and core values
  - About Us: Firm history, timeline, and pro bono initiatives
  - Services: Complete listing of 17+ practice areas with expandable details
  - Blog & Thought Leadership: Filterable blog with legal insights
  - Contact: Contact form, office information, and map integration

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
yokwe-website/
├── public/               # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── context/         # React Context (Theme)
│   │   └── ThemeContext.tsx
│   ├── data/           # Static data
│   │   ├── services.ts
│   │   └── blog.ts
│   ├── hooks/          # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Application entry point
│   └── index.css       # Global styles
└── tailwind.config.js  # Tailwind configuration
```

## Design System

### Color Palette

Following the 60/30/10 rule:

- **60% Background**: White (#FFFFFF) / Dark (#1A1A1A)
- **30% Secondary**: Navy Blue (#1E3A5F)
- **10% Accent**: Gold (#D4AF37)

### Typography

- Primary Font: Inter (Sans-serif)
- Secondary Font: Merriweather (Serif)

### Key Features

- No gradients (following PRD requirements)
- Clean, professional design
- Accessible color contrasts (WCAG 2.1 AA compliant)
- Smooth animations with reduced motion support

## Customization

### Updating Services

Edit `/src/data/services.ts` to add, remove, or modify practice areas.

### Adding Blog Posts

Edit `/src/data/blog.ts` to add new blog posts or articles.

### Theme Colors

Modify `/tailwind.config.js` to customize the color scheme.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

The build folder can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Azure Static Web Apps

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Yokwe Attorneys Inc. All rights reserved.

## Contact

**Yokwe Attorneys Inc.**
- Address: 43 Fisher Street, Goodwood, 7462, Cape Town, South Africa
- Phone: 066 487 5467
- Email: info@yokweattorneys.co.za
