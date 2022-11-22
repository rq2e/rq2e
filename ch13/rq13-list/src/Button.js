function Button({ className = "", icon, label, ...rest }) {
  return (
    <button className={`icon-button ${className}`} {...rest}>
      <img draggable={false} src={`icons/${icon}.svg`} alt={label} />
    </button>
  );
}

export default Button;
