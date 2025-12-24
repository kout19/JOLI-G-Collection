# Component Architecture - Auto Layout & Responsive Constraints

## Overview

The e-commerce website has been refactored into a **reusable component system** with **Auto Layout** principles and **responsive constraints**. This architecture ensures consistent spacing, alignment, and responsive behavior across all pages.

## Component Structure

```
components/
├── layout/           # Layout primitives (Auto Layout)
│   ├── Container.jsx    # Responsive container with max-width
│   ├── Section.jsx      # Section wrapper with padding variants
│   ├── Grid.jsx         # Responsive grid system
│   └── Flex.jsx         # Flexible container with responsive direction
│
├── content/          # Content components
│   ├── Hero.jsx          # Hero section component
│   ├── SectionHeader.jsx # Section title/subtitle
│   ├── ProductGrid.jsx   # Product grid with responsive columns
│   ├── CategoryCard.jsx  # Category card with aspect ratio
│   └── TestimonialCard.jsx # Testimonial card
│
├── forms/            # Form components
│   ├── Input.jsx         # Reusable input with variants
│   ├── Textarea.jsx      # Reusable textarea
│   └── NewsletterForm.jsx # Newsletter subscription form
│
└── [UI Components]   # Button, ProductCard, Header, Footer
```

## Auto Layout Principles

### 1. **Container** - Responsive Width Constraints
- **Max-width constraints**: sm (3xl), md (5xl), lg (6xl), xl (7xl), full
- **Horizontal padding**: Responsive padding (px-4 sm:px-6 lg:px-8)
- **Centered content**: Automatic margin centering

```jsx
<Container size="xl">
  {/* Content automatically constrained and centered */}
</Container>
```

### 2. **Section** - Vertical Spacing System
- **Padding variants**: none, tight (py-12/16), default (py-16/20), loose (py-20/28)
- **Background variants**: white, gray, dark, gradient
- **Responsive padding**: Different padding on mobile vs desktop

```jsx
<Section variant="default" background="white">
  {/* Consistent vertical spacing */}
</Section>
```

### 3. **Grid** - Responsive Column System
- **Column configuration**: Object with breakpoint keys
- **Gap spacing**: sm (gap-4), md (gap-6), lg (gap-8), xl (gap-12)
- **Auto-responsive**: Columns adapt to screen size

```jsx
<Grid 
  cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
  gap="md"
>
  {/* Automatically responsive columns */}
</Grid>
```

### 4. **Flex** - Flexible Layout Container
- **Direction**: row, col, row-reverse, col-reverse
- **Alignment**: start, center, end, stretch, baseline
- **Justification**: start, center, end, between, around, evenly
- **Responsive overrides**: Change direction/alignment at breakpoints

```jsx
<Flex 
  direction="col"
  align="center"
  justify="between"
  responsive={{ sm: { direction: 'row', align: 'center' } }}
>
  {/* Responsive flex layout */}
</Flex>
```

## Responsive Constraints

### Breakpoint System
- **Base**: < 640px (Mobile)
- **sm**: ≥ 640px (Tablet)
- **md**: ≥ 768px (Small Desktop)
- **lg**: ≥ 1024px (Desktop)
- **xl**: ≥ 1280px (Large Desktop)

### Responsive Patterns

1. **Mobile-First**: All components start with mobile styles
2. **Progressive Enhancement**: Add features at larger breakpoints
3. **Flexible Grids**: Columns adapt automatically
4. **Adaptive Typography**: Text sizes scale with breakpoints
5. **Flexible Images**: Maintain aspect ratios across devices

## Usage Examples

### Before (Inline Styles)
```jsx
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold">Title</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Products */}
    </div>
  </div>
</section>
```

### After (Reusable Components)
```jsx
<Section variant="default" background="white">
  <Container>
    <SectionHeader 
      title="Featured Products"
      subtitle="Handpicked selections"
    />
    <ProductGrid
      products={products}
      cols={{ base: 1, sm: 2, lg: 4 }}
      gap="md"
    />
  </Container>
</Section>
```

## Benefits

### 1. **Consistency**
- Same spacing and alignment across all pages
- Predictable responsive behavior
- Unified design system

### 2. **Maintainability**
- Change spacing in one place, affects all pages
- Easy to update responsive breakpoints
- Clear component responsibilities

### 3. **Reusability**
- Components can be used across different pages
- Easy to create new pages with existing components
- Composable architecture

### 4. **Developer Experience**
- Less code duplication
- Clearer component hierarchy
- Easier to understand and modify

### 5. **Performance**
- Smaller bundle size (shared components)
- Better code splitting opportunities
- Optimized re-renders

## Component Props Reference

### Layout Components

**Container**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `className`: Additional classes

**Section**
- `variant`: 'none' | 'tight' | 'default' | 'loose'
- `background`: 'white' | 'gray' | 'dark' | 'gradient'
- `className`: Additional classes

**Grid**
- `cols`: `{ base: number, sm?: number, md?: number, lg?: number, xl?: number }`
- `gap`: 'sm' | 'md' | 'lg' | 'xl'
- `className`: Additional classes

**Flex**
- `direction`: 'row' | 'col' | 'row-reverse' | 'col-reverse'
- `align`: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justify`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
- `gap`: 'sm' | 'md' | 'lg' | 'xl'
- `wrap`: boolean
- `responsive`: `{ sm?: { direction?, align?, justify? } }`
- `className`: Additional classes

## Migration Guide

Pages have been refactored to use the new component system:

- ✅ **Home.jsx** - Uses Hero, Section, Container, ProductGrid, CategoryCard, TestimonialCard
- ✅ **Products.jsx** - Uses Section, Container, Grid, Flex, ProductGrid
- ✅ **Contact.jsx** - Uses Section, Container, Grid, Input, Textarea

## Next Steps

1. **Refactor remaining pages** (About, ProductDetail) to use new components
2. **Add more variants** as needed (e.g., different card styles)
3. **Create Storybook** documentation for visual component library
4. **Add TypeScript** for better type safety
5. **Performance optimization** with React.memo where appropriate

