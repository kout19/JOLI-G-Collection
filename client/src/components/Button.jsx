const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';

  const variants = {
    primary:
      'bg-[#D4AF37] text-white hover:bg-[#B8941F] focus:ring-[#D4AF37] shadow-md hover:shadow-lg',
    secondary:
      'bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-800 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white focus:ring-[#D4AF37]',
    ghost:
      'text-neutral-700 hover:text-[#D4AF37] hover:bg-neutral-100 focus:ring-neutral-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

