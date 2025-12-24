import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Section, ProductGrid, Grid, Flex } from '../components';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [sortBy, setSortBy] = useState('featured');
  const [products, setProducts] = useState([]);

  const allProducts = [
    {
      id: 1,
      name: 'Luxury Classic Watch',
      category: 'watches',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      badge: 'New',
    },
    {
      id: 2,
      name: 'Premium Leather Belt',
      category: 'belts',
      price: 89,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=500&h=500&fit=crop',
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Designer T-Shirt',
      category: 'clothes',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Elegant Sunglasses',
      category: 'lifestyle',
      price: 149,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
    },
    {
      id: 5,
      name: 'Sport Watch',
      category: 'watches',
      price: 199,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'Casual Shirt',
      category: 'clothes',
      price: 69,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
    },
    {
      id: 7,
      name: 'Designer Belt',
      category: 'belts',
      price: 99,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=500&h=500&fit=crop',
    },
    {
      id: 8,
      name: 'Premium Wallet',
      category: 'lifestyle',
      price: 129,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'watches', label: 'Watches' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'belts', label: 'Belts' },
    { value: 'lifestyle', label: 'Lifestyle' },
  ];

  useEffect(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setProducts(filtered);
  }, [selectedCategory, sortBy]);

  return (
    <Section variant="default" background="white" className="min-h-screen">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Shop Collection
          </h1>
          <p className="text-lg text-neutral-600">
            Discover our premium selection of fashion and lifestyle products
          </p>
        </div>

        {/* Filters and Sort */}
        <Flex
          direction="col"
          justify="between"
          align="start"
          gap="md"
          responsive={{ md: { direction: 'row', align: 'center' } }}
          className="mb-8 pb-8 border-b border-neutral-200"
        >
          {/* Category Filters */}
          <Flex wrap gap="sm">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-[#D4AF37] text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </Flex>

          {/* Sort */}
          <Flex align="center" gap="sm">
            <label className="text-sm text-neutral-600 font-medium">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </Flex>
        </Flex>

        {/* Products Grid */}
        <ProductGrid
          products={products}
          cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          gap="md"
        />

        {/* Results Count */}
        <div className="mt-12 text-center text-neutral-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </div>
      </Container>
    </Section>
  );
};

export default Products;

