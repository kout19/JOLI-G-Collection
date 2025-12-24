/**
 * CategoryCard - Reusable category card component
 * Auto-layout: Aspect ratio, responsive image, overlay content
 */
import { Link } from 'react-router-dom';

const CategoryCard = ({ 
  name, 
  image, 
  link, 
  aspectRatio = '4/3', // '1/1' | '4/3' | '16/9' | '3/4'
  className = '' 
}) => {
  const aspectClasses = {
    '1/1': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    '3/4': 'aspect-[3/4]',
  };

  return (
    <Link
      to={link}
      className={`group relative overflow-hidden rounded-2xl ${aspectClasses[aspectRatio]} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {name}
        </h3>
        <span className="text-white/90 font-medium flex items-center group-hover:translate-x-2 transition-transform">
          Shop Now
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;

