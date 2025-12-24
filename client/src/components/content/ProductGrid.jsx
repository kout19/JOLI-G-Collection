/**
 * ProductGrid - Reusable product grid with responsive columns
 * Auto-layout: Responsive grid, gap spacing
 */
import ProductCard from '../ProductCard';
import Grid from '../layout/Grid';

const ProductGrid = ({ 
  products, 
  cols = { base: 1, sm: 2, lg: 4 },
  gap = 'md',
  className = '' 
}) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-neutral-600">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <Grid cols={cols} gap={gap} className={className}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;

