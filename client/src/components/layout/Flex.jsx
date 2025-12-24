/**
 * Flex - Flexible container with responsive direction and alignment
 * Auto-layout: Flex direction, alignment, gap, wrap
 */
const Flex = ({ 
  children, 
  direction = 'row', // 'row' | 'col' | 'row-reverse' | 'col-reverse'
  align = 'start', // 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify = 'start', // 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  gap = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  wrap = false,
  responsive = {}, // { sm: { direction, align, justify } }
  className = '' 
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  // Build responsive classes
  const smDirectionClasses = {
    row: 'sm:flex-row',
    col: 'sm:flex-col',
    'row-reverse': 'sm:flex-row-reverse',
    'col-reverse': 'sm:flex-col-reverse',
  };

  const smAlignClasses = {
    start: 'sm:items-start',
    center: 'sm:items-center',
    end: 'sm:items-end',
    stretch: 'sm:items-stretch',
    baseline: 'sm:items-baseline',
  };

  const smJustifyClasses = {
    start: 'sm:justify-start',
    center: 'sm:justify-center',
    end: 'sm:justify-end',
    between: 'sm:justify-between',
    around: 'sm:justify-around',
    evenly: 'sm:justify-evenly',
  };

  let responsiveClasses = '';
  if (responsive.sm) {
    if (responsive.sm.direction) responsiveClasses += ` ${smDirectionClasses[responsive.sm.direction] || ''}`;
    if (responsive.sm.align) responsiveClasses += ` ${smAlignClasses[responsive.sm.align] || ''}`;
    if (responsive.sm.justify) responsiveClasses += ` ${smJustifyClasses[responsive.sm.justify] || ''}`;
  }

  return (
    <div 
      className={`flex ${directionClasses[direction]} ${alignClasses[align]} ${justifyClasses[justify]} ${gapClasses[gap]} ${wrap ? 'flex-wrap' : ''} ${responsiveClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;

