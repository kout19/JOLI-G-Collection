/**
 * Grid - Responsive grid layout component
 * Auto-layout: Responsive columns, gap spacing, auto-fit constraints
 */
const Grid = ({ 
  children, 
  cols = { base: 1, sm: 2, md: 3, lg: 4 }, // Responsive column config
  gap = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  className = '' 
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  // Map column numbers to Tailwind classes
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const smColClasses = {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    5: 'sm:grid-cols-5',
    6: 'sm:grid-cols-6',
  };

  const mdColClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  };

  const lgColClasses = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  };

  const xlColClasses = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
  };

  // Build responsive grid classes
  const gridCols = `grid ${colClasses[cols.base] || 'grid-cols-1'} ${
    cols.sm && smColClasses[cols.sm] ? smColClasses[cols.sm] : ''
  } ${cols.md && mdColClasses[cols.md] ? mdColClasses[cols.md] : ''} ${
    cols.lg && lgColClasses[cols.lg] ? lgColClasses[cols.lg] : ''
  } ${cols.xl && xlColClasses[cols.xl] ? xlColClasses[cols.xl] : ''}`;

  return (
    <div className={`${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;

