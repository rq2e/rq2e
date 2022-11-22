function Button({
  children,
  outline = false,
  disabled = false,
  className = null,
  width = null,
}) {
  const classNames = [
    "flex flex-row",
    "bg-pink-500",
    "text-white",
    "border-solid",
    "border-pink-500",
    "border-2",
    "my-4 mx-8",
    "py-4 px-8",
    "text-lg",
    "leading-normal",
    "w-64",
    "pointer",
    "gap-2",
    "justify-center",
    "items-center",
    "group",
    outline ? "bg-opacity-0 border-pink-500 text-pink-500" : "",
    "disabled:opacity-50 disabled:pointer-events-none",
    className,
  ].filter(Boolean);

  const style = width ? { width: `${width}px` } : null;

  return (
    <button disabled={disabled} className={classNames.join(" ")} style={style}>
      {children}
      <svg
        className="w-4 h-4 relative group-hover:animate-hbounce"
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
