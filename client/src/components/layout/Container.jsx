/**
 * Container - Responsive container with max-width constraints
 * Auto-layout: Horizontal padding, centered content, responsive max-width
 */
const Container = ({ 
  children, 
  size = 'xl', // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

