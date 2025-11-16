# Design Guidelines: COP 30 Environmental Research Website

## Design Approach
**System-Based with Environmental Theme**: Using Material Design principles adapted with environmental aesthetics. The design balances academic credibility with visual engagement, creating an immersive educational experience that reflects the urgency and importance of climate action.

## Core Design Principles
1. **Environmental Authenticity**: Nature-inspired visuals that reinforce environmental themes
2. **Information Clarity**: Clean hierarchy for complex climate data and research
3. **Institutional Credibility**: Professional presentation suitable for PMBA academic context
4. **Visual Impact**: Strategic imagery and effects to maintain engagement

## Typography System
- **Primary Font**: 'Inter' (Google Fonts) - clean, modern, excellent readability
- **Accent Font**: 'Poppins' (Google Fonts) - for headlines and emphasis
- **Hierarchy**:
  - Hero Headlines: text-5xl to text-7xl, font-bold
  - Section Headers: text-3xl to text-4xl, font-semibold
  - Subsections: text-xl to text-2xl, font-medium
  - Body Text: text-base to text-lg, font-normal, leading-relaxed
  - Captions: text-sm, font-light

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 8, 12, 16, 20, 24 for spacing
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content columns: max-w-4xl for text-heavy sections
- Grid gaps: gap-8 to gap-12
- Component spacing: space-y-8 to space-y-12

## Page Structure

**Hero Section**:
- Full-width impactful environmental image (deforested vs. lush forest split, or Amazon aerial view with climate data overlay)
- Overlay: Semi-transparent gradient (dark to transparent)
- Centered content with blurred-background CTA button
- Title animation: Fade-in with subtle upward motion
- Height: min-h-screen with content-aware sizing

**Information Sections** (7-9 sections total):
1. **COP 30 Overview**: Two-column layout (details + context map/timeline graphic)
2. **Environmental Goals**: 3-column grid of cards with icons, metrics, descriptions
3. **Impact Analysis**: 4-quadrant layout (environment, economy, society, policy) with visual indicators
4. **Brazil & Amazon Connection**: Split layout with Amazon imagery + data visualization
5. **Climate Justice**: Full-width emphasis section with quote-style typography
6. **Critical Analysis**: Team perspectives in card-based layout
7. **Team Credits**: Grid of team members with PMBA branding
8. **References**: Organized list with categorization

## Component Library

**Navigation**:
- Sticky header with blur backdrop
- Logo area: PMBA emblem + course identifier
- Menu: Smooth scroll anchor links
- Mobile: Hamburger menu with slide-in drawer

**Cards**:
- Elevated with subtle shadow (shadow-lg)
- Rounded corners (rounded-xl)
- Padding: p-6 to p-8
- Hover: Transform scale-105 transition
- Border: Optional subtle border-2 for emphasis

**Data Visualization Elements**:
- Progress bars for emission reduction targets
- Stat counters with large numbers + descriptive labels
- Timeline components for COP 30 schedule
- Icon-based feature highlights (tree, factory, water, energy icons)

**CTA Buttons**:
- Primary: Solid with backdrop blur when over images
- Secondary: Outline style
- Size: px-8 py-4 (generous click area)
- Typography: font-semibold text-lg
- Rounded: rounded-full or rounded-lg

**Image Integration**:
- Hero: Large, impactful environmental photography
- Section backgrounds: Subtle, low-opacity textures
- Content images: Amazon rainforest, climate events, renewable energy, indigenous communities
- Image treatment: Subtle overlays to maintain text readability

## Animations & Interactions
**Minimal & Purposeful**:
- Scroll-triggered fade-ins for section reveals (one-time)
- Smooth scroll navigation between sections
- Card hover effects (subtle lift)
- NO parallax, NO continuous animations, NO distracting effects

## Multi-Column Strategy
- **Hero**: Single column, centered
- **COP 30 Details**: 2 columns desktop (info + visual)
- **Goals/Metas**: 3 columns desktop, 1 mobile
- **Impacts**: 2x2 grid desktop, stacked mobile
- **Analysis**: 2 columns for team member perspectives
- **References**: 2 columns for organized listing

## Environmental Design Elements
- Use Heroicons for consistent iconography
- Nature-inspired decorative elements (leaf patterns, wave motifs) - used sparingly
- Gradient overlays suggesting earth/sky/forest
- Texture backgrounds: Subtle topographic patterns or organic shapes

## Accessibility & Responsiveness
- Sufficient contrast ratios for all text (WCAG AA minimum)
- Focus states on all interactive elements
- Semantic HTML structure for screen readers
- Responsive breakpoints: mobile (default), tablet (md:), desktop (lg:, xl:)
- Touch-friendly tap targets (minimum 44px)

## Images Required
1. **Hero**: Dramatic Amazon rainforest or split image (preservation vs. deforestation)
2. **COP 30 Section**: Conference imagery or world map with participating nations
3. **Brazil/Amazon**: Aerial Amazon photography showcasing biodiversity
4. **Climate Justice**: Community-focused imagery (indigenous peoples, affected populations)
5. **Background textures**: Subtle earth/nature patterns for section variety

**Image Treatment**: All images should be high-quality, properly optimized, with overlays/gradients ensuring text legibility when used as backgrounds.