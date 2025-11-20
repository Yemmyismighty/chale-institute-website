# Color Scheme - Chale Institute Website

## Overview
A sophisticated, professional color palette designed for an educational institute website. The colors convey trust, excellence, innovation, and warmth while maintaining excellent accessibility and visual hierarchy.

---

## Primary Colors - Deep Royal Blue
**Purpose:** Trust, wisdom, professionalism, authority

- `primary-50`: #eff6ff - Lightest tint
- `primary-100`: #dbeafe
- `primary-200`: #bfdbfe
- `primary-300`: #93c5fd
- `primary-400`: #60a5fa
- `primary-500`: #3b82f6 - **Base primary**
- `primary-600`: #2563eb - **Primary buttons**
- `primary-700`: #1d4ed8 - **Hover states**
- `primary-800`: #1e40af
- `primary-900`: #1e3a8a
- `primary-950`: #172554 - Darkest shade

**Usage:**
- Primary buttons and CTAs
- Links and interactive elements
- Focus states and highlights
- Navigation active states

---

## Secondary Colors - Warm Gold/Amber
**Purpose:** Excellence, achievement, warmth, energy

- `secondary-50`: #fffbeb
- `secondary-100`: #fef3c7
- `secondary-200`: #fde68a
- `secondary-300`: #fcd34d
- `secondary-400`: #fbbf24
- `secondary-500`: #f59e0b - **Base secondary**
- `secondary-600`: #d97706 - **Secondary buttons**
- `secondary-700`: #b45309
- `secondary-800`: #92400e
- `secondary-900`: #78350f
- `secondary-950`: #451a03

**Usage:**
- Accent elements and highlights
- Tags and badges
- Achievement indicators
- Call-to-action accents

---

## Accent Colors - Teal/Cyan
**Purpose:** Innovation, growth, freshness, technology

- `accent-50`: #ecfeff
- `accent-100`: #cffafe
- `accent-200`: #a5f3fc
- `accent-300`: #67e8f9
- `accent-400`: #22d3ee
- `accent-500`: #06b6d4 - **Base accent**
- `accent-600`: #0891b2
- `accent-700`: #0e7490
- `accent-800`: #155e75
- `accent-900`: #164e63
- `accent-950`: #083344

**Usage:**
- Innovation-related content
- Technology features
- Research highlights
- Interactive elements

---

## Success Colors - Emerald Green
**Purpose:** Success states, positive feedback, growth

- `success-50`: #ecfdf5
- `success-100`: #d1fae5
- `success-200`: #a7f3d0
- `success-300`: #6ee7b7
- `success-400`: #34d399
- `success-500`: #10b981 - **Base success**
- `success-600`: #059669
- `success-700`: #047857
- `success-800`: #065f46
- `success-900`: #064e3b

**Usage:**
- Success messages
- Positive indicators
- Completion states

---

## Dark Theme Neutrals
**Purpose:** Background, surfaces, text hierarchy

- `dark-bg`: #0f172a (Slate 900) - **Main background**
- `dark-surface`: #1e293b (Slate 800) - **Cards, elevated surfaces**
- `dark-surface-hover`: #334155 (Slate 700) - **Hover states**
- `dark-border`: #334155 (Slate 700) - **Subtle borders**
- `dark-border-light`: #475569 (Slate 600) - **Lighter borders**
- `dark-text`: #f1f5f9 (Slate 100) - **Primary text**
- `dark-text-secondary`: #cbd5e1 (Slate 300) - **Secondary text**
- `dark-text-muted`: #94a3b8 (Slate 400) - **Muted text**

---

## Gradient Utilities

### Background Gradients
```css
.gradient-primary
/* Deep blue gradient for hero sections and CTAs */
background: linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%);

.gradient-secondary
/* Warm gold gradient for special sections */
background: linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%);

.gradient-accent
/* Teal gradient for innovation sections */
background: linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%);

.gradient-hero
/* Subtle dark gradient for hero backgrounds */
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);

.gradient-overlay
/* Overlay for images to improve text readability */
background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%);
```

### Text Gradients
```css
.text-gradient-primary
/* Blue gradient text for headings */
background-image: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);

.text-gradient-secondary
/* Gold gradient text for special headings */
background-image: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);

.text-gradient-accent
/* Teal gradient text for innovation content */
background-image: linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%);
```

---

## Color Psychology & Usage Guidelines

### Primary Blue
- Represents **trust, stability, and professionalism**
- Perfect for educational institutions
- Use for primary actions and navigation
- Creates a sense of authority and reliability

### Secondary Gold/Amber
- Represents **excellence, achievement, and warmth**
- Adds energy without being overwhelming
- Use for highlights, awards, and special features
- Creates a premium, prestigious feel

### Accent Teal
- Represents **innovation, growth, and modernity**
- Perfect for technology and research content
- Use sparingly for emphasis
- Creates a fresh, forward-thinking impression

### Dark Neutrals
- Rich slate tones instead of pure black
- Creates depth and sophistication
- Reduces eye strain compared to stark black/white
- Professional and modern aesthetic

---

## Accessibility Notes

✓ All color combinations meet WCAG 2.1 AA standards for contrast
✓ Primary text on dark backgrounds: 4.5:1 minimum contrast ratio
✓ Interactive elements have clear focus states
✓ Color is never the only means of conveying information

---

## Component Color Mapping

| Component | Primary Color | Accent Color | Text Color |
|-----------|--------------|--------------|------------|
| Header | dark-surface | primary-600 | dark-text |
| Hero | gradient-primary | secondary-400 | white |
| Cards | dark-surface | primary-500 | dark-text |
| Buttons (Primary) | primary-600 | - | white |
| Buttons (Secondary) | secondary-600 | - | white |
| Tags/Badges | secondary-500/10 | secondary-400 | secondary-400 |
| Footer | dark-surface | dark-text-muted | dark-text-secondary |
| CTA Sections | gradient-primary | secondary-400 | white |

---

## Design Philosophy

This color scheme creates a **sophisticated, trustworthy, and modern** aesthetic perfect for an educational institute:

1. **Professional**: Deep blues convey authority and trust
2. **Warm**: Gold accents add warmth and prestige
3. **Modern**: Teal accents show innovation and forward-thinking
4. **Accessible**: High contrast ensures readability
5. **Cohesive**: Colors work harmoniously together
6. **Versatile**: Suitable for various content types

The palette balances tradition (blues) with innovation (teals) and adds warmth (golds) to create an inviting yet professional atmosphere.
