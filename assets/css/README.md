# Modular CSS Architecture

This project uses a well-organized, modular CSS architecture following modern best practices for maintainability, scalability, and performance.

## Architecture Overview

The CSS is organized into distinct layers following the **ITCSS (Inverted Triangle CSS)** methodology and **BEM (Block Element Modifier)** naming convention.

### File Structure

```
assets/css/
├── main.css                    # Entry point importing all modules
├── main.scss                   # SCSS version (if needed)
├── README.md                   # This documentation
├── base/                       # Foundation layer
│   ├── variables.css           # Design tokens and CSS custom properties
│   ├── reset.css              # CSS reset and normalization
│   └── typography.css         # Typography system
├── layout/                     # Structural components
│   ├── navigation.css         # Navigation system
│   ├── grid.css              # Grid and layout utilities
│   └── sidebar.css           # Sidebar layout
├── components/                 # Reusable UI components
│   ├── buttons.css           # Button components
│   ├── cards.css             # Card components
│   └── nav-tabs.css          # Navigation tabs
├── pages/                     # Page-specific styles
│   ├── home.css              # Home page styles
│   ├── about.css             # About page styles
│   ├── publications.css      # Publications page styles
│   └── contact.css           # Contact page styles
├── themes/                    # Theme variations
│   └── dark-mode.css         # Dark mode theme
└── utilities/                 # Helper classes
    ├── animations.css        # Animation utilities
    └── responsive.css        # Responsive utilities
```

## Layer Descriptions

### Base Layer
Foundation styles that define the core design system:

- **variables.css**: Design tokens including colors, typography, spacing, animations
- **reset.css**: CSS reset, normalization, and global base styles
- **typography.css**: Typography system with headings, body text, and special text styles

### Layout Layer
Structural components that define page layout:

- **navigation.css**: Fixed navigation, mobile menu, theme toggle
- **grid.css**: Grid systems, containers, and layout utilities
- **sidebar.css**: Profile sidebar with responsive behavior

### Components Layer
Reusable UI components:

- **buttons.css**: Button variants (primary, secondary, outline, ghost) with sizes and states
- **cards.css**: Card components for publications, research, contact information
- **nav-tabs.css**: Tab navigation with multiple variants (pills, underline, boxed)

### Pages Layer
Page-specific styles:

- **home.css**: Hero section, introduction, recent work, statistics, testimonials
- **about.css**: Biography, timeline, skills, achievements, personal info
- **publications.css**: Publication filters, search, listing, metrics, awards
- **contact.css**: Contact forms, information cards, office hours, social links

### Themes Layer
Theme variations and customizations:

- **dark-mode.css**: Complete dark mode implementation with smooth transitions

### Utilities Layer
Helper classes and utilities:

- **animations.css**: Keyframe animations, transitions, loading states, scroll effects
- **responsive.css**: Responsive utilities, breakpoints, mobile-first patterns

## Design Tokens

The CSS architecture uses a comprehensive design token system defined in `base/variables.css`:

### Color System
- Primary colors with light/dark variants
- Background and surface colors
- Text colors (primary, secondary, muted)
- Status colors (success, warning, error, info)
- Border and divider colors

### Typography System
- Font size scale (xs to 4xl)
- Font weight scale (light to bold)
- Line height scale (tight to loose)

### Spacing System
- Consistent spacing scale (xs to 3xl)
- Component-specific spacing tokens

### Component Tokens
- Card styling (background, border, shadow, radius)
- Navigation styling
- Form element styling
- Z-index scale

## Naming Conventions

### BEM Methodology
The CSS follows BEM (Block Element Modifier) naming convention:

```css
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

Examples:
```css
.card {}                    /* Block */
.card__header {}           /* Element */
.card--featured {}         /* Modifier */
.card__title--large {}     /* Element + Modifier */
```

### File Naming
- Use kebab-case for file names
- Prefix with layer type for clarity
- Keep names descriptive and specific

### Class Naming
- Use semantic, descriptive names
- Avoid presentational names
- Include component context

## Responsive Design

The architecture follows mobile-first responsive design principles:

### Breakpoints
```css
--breakpoint-xs: 480px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Responsive Utilities
- Display utilities (.hidden, .block, .flex, etc.)
- Grid utilities (.grid-cols-1, .grid-cols-2, etc.)
- Spacing utilities (.m-4, .p-6, etc.)
- Flexbox utilities (.justify-center, .items-center, etc.)

## Performance Considerations

### Optimization Features
- CSS custom properties for efficient theming
- Minimal specificity conflicts
- Efficient selector patterns
- GPU-accelerated animations
- Reduced motion support
- Print styles included

### Loading Strategy
- Single main.css entry point
- Logical import order based on dependency
- Critical CSS can be inlined for above-the-fold content

## Accessibility

### Built-in Accessibility Features
- ARIA-compliant components
- Focus indicators for all interactive elements
- High contrast mode support
- Reduced motion preferences
- Screen reader utilities (.sr-only)
- Semantic color usage with sufficient contrast

### Focus Management
```css
.focus\:ring:focus {
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.3);
}
```

## Dark Mode Implementation

The dark mode system uses CSS custom properties for efficient theme switching:

### Theme Toggle
- Smooth transitions between themes
- Animated icon changes
- System preference detection
- Theme persistence

### Color Overrides
All components automatically adapt to dark mode through CSS custom property overrides.

## Usage Guidelines

### Adding New Components
1. Create new file in appropriate layer directory
2. Follow BEM naming convention
3. Use existing design tokens
4. Include responsive behavior
5. Add accessibility features
6. Update main.css imports

### Modifying Existing Styles
1. Locate the appropriate file in the layer structure
2. Follow existing patterns and conventions
3. Test across all breakpoints
4. Verify dark mode compatibility
5. Check accessibility compliance

### Using Utility Classes
```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Animation classes -->
<div class="animate-fadeInUp delay-200">

<!-- Spacing utilities -->
<div class="p-6 mx-auto max-w-4xl">
```

## Browser Support

The CSS architecture supports:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Fallbacks for unsupported features
- Graceful degradation

## Maintenance

### Regular Tasks
- Update design tokens as needed
- Audit unused CSS
- Optimize performance
- Test accessibility
- Validate responsive behavior

### Code Quality
- Consistent formatting
- Meaningful comments
- Logical organization
- Regular refactoring

## Contributing

When contributing to the CSS architecture:

1. Follow the established file structure
2. Use the design token system
3. Maintain BEM naming convention
4. Include responsive behavior
5. Add accessibility features
6. Test in multiple browsers
7. Document significant changes

This modular architecture ensures maintainable, scalable, and performant CSS that can easily adapt to future requirements while maintaining consistency and quality across the entire website. 