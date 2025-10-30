import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full-width' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;