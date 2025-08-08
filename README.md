# Real Estate Magazine Clone

A Vue.js 3 application that replicates the design of a real estate magazine website with pixel-perfect implementation.

## 🚀 Features

- **Vue.js 3** with Composition API
- **SCSS** for advanced styling
- **Vite** for fast development and building
- **Responsive Design** for desktop and mobile
- **RTL Support** for Hebrew text
- **Component-based Architecture**

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd real-estate-magazine
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   └── Header.vue          # Main header component
├── styles/
│   ├── variables.scss       # SCSS variables and CSS custom properties
│   └── main.scss           # Global styles and reset
├── App.vue                 # Main application component
└── main.js                 # Vue application entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#5807CA` (Purple)
- **Background**: `#fbf8ff` (Light purple)
- **Text**: `#404040` (Dark gray)
- **Light Gray**: `#D8D6DA`

### Typography
- **Font Family**: Heebo (Hebrew font)
- **Base Size**: 18px
- **Line Height**: 1.2

### Spacing
- **Small Gap**: 12px
- **Gap**: 15px
- **Mid Gap**: 32px
- **Big Gap**: 45px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Component Development

The project follows Vue.js 3 best practices:

1. **Single File Components** with `<template>`, `<script>`, and `<style>`
2. **SCSS** for component-specific styles
3. **Responsive design** with mobile-first approach
4. **RTL support** for Hebrew content

### Styling Guidelines

- Use SCSS variables from `src/styles/variables.scss`
- Follow BEM methodology for class naming
- Implement responsive design with mobile-first approach
- Use CSS custom properties for dynamic theming

## 📱 Responsive Design

The application is designed to work on:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Breakpoints
- Mobile: `max-width: 768px`
- Desktop: `min-width: 769px`

## 🎯 Current Implementation

### Header Component
- ✅ Desktop and mobile layouts
- ✅ Navigation menu with all links
- ✅ Social media icons (SVG)
- ✅ Search functionality placeholder
- ✅ Responsive design
- ✅ RTL support
- ✅ Hover effects and transitions

### Next Steps
- [ ] Article components
- [ ] Homepage layout
- [ ] Article grid system
- [ ] Category pages
- [ ] Search functionality
- [ ] Mobile menu implementation

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Notes

- The project uses **Heebo font** for Hebrew text support
- All IDs and classes have been modified from the original to avoid direct copying
- SVG icons are embedded for better performance
- The design follows the original website's structure while being implemented from scratch

## 🤝 Contributing

1. Follow Vue.js 3 best practices
2. Use SCSS for styling
3. Maintain responsive design
4. Test on both desktop and mobile
5. Ensure RTL support for Hebrew content

## 📄 License

This project is for educational purposes and interview preparation.
