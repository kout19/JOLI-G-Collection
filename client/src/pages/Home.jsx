import { Link } from 'react-router-dom';
import {
  Hero,
  Section,
  Container,
  SectionHeader,
  ProductGrid,
  CategoryCard,
  TestimonialCard,
  NewsletterForm,
  Grid,
  Flex,
  Button,
} from '../components';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Luxury Classic Watch',
      category: 'Watches',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      badge: 'New',
    },
    {
      id: 2,
      name: 'Premium Leather Belt',
      category: 'Belts',
      price: 89,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=500&h=500&fit=crop',
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Designer T-Shirt',
      category: 'Clothes',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Elegant Sunglasses',
      category: 'Lifestyle',
      price: 149,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
    },
  ];

  const categories = [
    {
      name: 'Watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
      link: '/products?category=watches',
    },
    {
      name: 'Clothes',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
      link: '/products?category=clothes',
    },
    {
      name: 'Belts',
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=600&h=400&fit=crop',
      link: '/products?category=belts',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      text: 'The quality is exceptional and the service is outstanding. My favorite online store!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Lifestyle Blogger',
      text: 'Beautiful products that truly reflect premium quality. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Customer',
      text: 'Fast shipping and amazing customer service. The products exceeded my expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
        title="Elevate Your Style"
        subtitle="Discover premium fashion and lifestyle products crafted for the modern individual"
        primaryCTA={{ label: 'Shop Collection', to: '/products' }}
        secondaryCTA={{ label: 'Learn More', to: '/about' }}
        height="90vh"
      />

      {/* Featured Products */}
      <Section variant="default" background="white">
        <Container>
          <SectionHeader
            title="Featured Products"
            subtitle="Handpicked selections from our premium collection"
          />
          <ProductGrid
            products={featuredProducts}
            cols={{ base: 1, sm: 2, lg: 4 }}
            gap="md"
          />
          <Flex justify="center" className="mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </Flex>
        </Container>
      </Section>

      {/* Categories */}
      <Section variant="default" background="gray">
        <Container>
          <SectionHeader
            title="Shop by Category"
            subtitle="Explore our curated collections"
          />
          <Grid
            cols={{ base: 1, md: 3 }}
            gap="lg"
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                image={category.image}
                link={category.link}
                aspectRatio="4/3"
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section variant="default" background="white">
        <Container>
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Trusted by thousands of satisfied customers"
          />
          <Grid
            cols={{ base: 1, md: 3 }}
            gap="lg"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="default" background="gradient">
        <Container size="md">
          <SectionHeader
            title="Stay in Style"
            subtitle="Subscribe to our newsletter and get 10% off your first order"
          />
          <NewsletterForm
            variant="dark"
            className="max-w-md mx-auto"
          />
        </Container>
      </Section>
    </div>
  );
};

export default Home;

