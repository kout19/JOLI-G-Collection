# Reusable Components Library

This component library follows **Auto Layout** principles with **responsive constraints**, making it easy to build consistent, responsive UIs.

## Layout Components

### Container
Responsive container with max-width constraints and horizontal padding.

```jsx
<Container size="xl"> {/* sm | md | lg | xl | full */}
  Content here
</Container>
```

### Section
Reusable section wrapper with responsive padding and background variants.

```jsx
<Section variant="default" background="white"> {/* tight | default | loose */}
  Content here
</Section>
```

### Grid
Responsive grid layout with configurable columns and gaps.

```jsx
<Grid 
  cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
  gap="md" // sm | md | lg | xl
>
  {items.map(item => <Item key={item.id} />)}
</Grid>
```

### Flex
Flexible container with responsive direction and alignment.

```jsx
<Flex 
  direction="col"
  align="center"
  justify="between"
  gap="md"
  responsive={{ sm: { direction: 'row', align: 'center' } }}
>
  Content here
</Flex>
```

## Content Components

### Hero
Full-width hero section with image, overlay, and CTAs.

```jsx
<Hero
  image="/hero.jpg"
  title="Welcome"
  subtitle="Description"
  primaryCTA={{ label: 'Shop', to: '/products' }}
  secondaryCTA={{ label: 'Learn', to: '/about' }}
  height="90vh"
/>
```

### SectionHeader
Reusable section header with title and subtitle.

```jsx
<SectionHeader
  title="Featured Products"
  subtitle="Handpicked selections"
  align="center" // left | center | right
/>
```

### ProductGrid
Responsive product grid with automatic empty state.

```jsx
<ProductGrid
  products={products}
  cols={{ base: 1, sm: 2, lg: 4 }}
  gap="md"
/>
```

### CategoryCard
Category card with image, overlay, and hover effects.

```jsx
<CategoryCard
  name="Watches"
  image="/watch.jpg"
  link="/products?category=watches"
  aspectRatio="4/3" // 1/1 | 4/3 | 16/9 | 3/4
/>
```

### TestimonialCard
Testimonial card with rating, text, and author info.

```jsx
<TestimonialCard
  name="John Doe"
  role="Customer"
  text="Great product!"
  rating={5}
/>
```

## Form Components

### Input
Reusable input with label, error handling, and variants.

```jsx
<Input
  type="email"
  label="Email"
  placeholder="your@email.com"
  value={email}
  onChange={handleChange}
  size="md" // sm | md | lg
  variant="default" // default | outline | filled
  required
/>
```

### Textarea
Reusable textarea component.

```jsx
<Textarea
  label="Message"
  value={message}
  onChange={handleChange}
  rows={6}
  required
/>
```

### NewsletterForm
Pre-built newsletter subscription form.

```jsx
<NewsletterForm
  onSubmit={handleSubscribe}
  variant="dark" // dark | light
  placeholder="Enter your email"
  buttonText="Subscribe"
/>
```

## Design Principles

### Auto Layout
- Components automatically handle spacing and alignment
- Responsive breakpoints are built-in
- Consistent padding and margins

### Responsive Constraints
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible column configurations
- Adaptive typography and spacing

### Reusability
- Composable components
- Consistent prop interfaces
- Variant-based styling
- Easy to extend and customize

