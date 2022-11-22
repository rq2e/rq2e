import styles from "./button.module.css";

function Button({
  children,
  outline = false,
  disabled = false,
  className = "",
  width = null,
}) {
  const classNames = [
    styles.normal,
    outline ? styles.outline : "",
    className,
  ].filter(Boolean);
  const style = width ? { width: `${width}px` } : null;

  return (
    <button className={classNames.join(" ")} disabled={disabled} style={style}>
      {children}
      <svg
        className={styles.icon}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 490 490"
      >
        <polygon
          points="240.112,0 481.861,245.004 240.112,490 8.139,490 250.29,245.004 8.139,0"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export default Button;
