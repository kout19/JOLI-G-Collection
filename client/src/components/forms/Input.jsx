/**
 * Input - Reusable input component with responsive sizing
 * Auto-layout: Padding, border, focus states
 */
const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  required = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  variant = 'default', // 'default' | 'outline' | 'filled'
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const variantClasses = {
    default: 'border-neutral-300 bg-white',
    outline: 'border-2 border-neutral-300 bg-transparent',
    filled: 'border-transparent bg-neutral-100',
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full ${sizeClasses[size]} border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all ${variantClasses[variant]} ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;

