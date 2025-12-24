/**
 * SectionHeader - Reusable section header with title and description
 * Auto-layout: Centered text, responsive typography, spacing
 */
const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center', // 'left' | 'center' | 'right'
  className = '' 
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

