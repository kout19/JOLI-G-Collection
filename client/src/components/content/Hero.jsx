/**
 * Hero - Reusable hero section component
 * Auto-layout: Full-width, centered content, responsive height
 */
import { Link } from 'react-router-dom';
import Button from '../Button';
import Flex from '../layout/Flex';

const Hero = ({ 
  image,
  overlay = true,
  overlayOpacity = 40, // 0-100
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  height = '90vh', // '50vh' | '60vh' | '70vh' | '80vh' | '90vh' | 'full'
  className = '' 
}) => {
  const heightClasses = {
    '50vh': 'h-[50vh]',
    '60vh': 'h-[60vh]',
    '70vh': 'h-[70vh]',
    '80vh': 'h-[80vh]',
    '90vh': 'h-[90vh]',
    full: 'h-screen',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title || 'Hero'}
              className="w-full h-full object-cover"
            />
            {overlay && (
              <div 
                className={`absolute inset-0 bg-black/${overlayOpacity}`}
                style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
              />
            )}
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {title && (
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <Flex 
            direction="col" 
            align="center"
            justify="center"
            gap="md"
            responsive={{ sm: { direction: 'row' } }}
            className="justify-center"
          >
            {primaryCTA && (
              <Link to={primaryCTA.to || '#'}>
                <Button 
                  size="lg" 
                  variant={primaryCTA.variant || 'primary'}
                  className="w-full sm:w-auto"
                >
                  {primaryCTA.label}
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryCTA.to || '#'}>
                <Button 
                  size="lg" 
                  variant={secondaryCTA.variant || 'outline'}
                  className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-neutral-900"
                >
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </Flex>
        )}
      </div>
    </section>
  );
};

export default Hero;

