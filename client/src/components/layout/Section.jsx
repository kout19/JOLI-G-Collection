/**
 * Section - Reusable section wrapper with responsive padding
 * Auto-layout: Vertical padding, responsive spacing
 */
const Section = ({ 
  children, 
  variant = 'default', // 'default' | 'tight' | 'loose' | 'none'
  background = 'white', // 'white' | 'gray' | 'dark' | 'gradient'
  className = '' 
}) => {
  const paddingClasses = {
    none: '',
    tight: 'py-12 sm:py-16',
    default: 'py-16 sm:py-20',
    loose: 'py-20 sm:py-28',
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    dark: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white',
  };

  return (
    <section 
      className={`${paddingClasses[variant]} ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

