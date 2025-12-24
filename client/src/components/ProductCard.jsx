import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Quick View Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-white font-medium">Quick View</span>
          </div>
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-[#D4AF37] text-white text-xs font-semibold rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-5">
          <p className="text-sm text-neutral-500 mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div>
              {product.originalPrice && (
                <span className="text-sm text-neutral-400 line-through mr-2">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold text-neutral-900">
                ${product.price}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
              className="p-2 bg-neutral-100 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

