const BUTTON_STYLES = {
  display: "flex",
  background: "hotpink",
  color: "white",
  border: "2px solid hotpink",
  margin: "1em 2em",
  padding: "1em 2em",
  fontSize: "120%",
  width: "250px",
  cursor: "pointer",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
};
const OUTLINE_STYLES = {
  borderColor: "hotpink",
  backgroundColor: "transparent",
  color: "hotpink",
};
const DISABLED_STYLES = {
  opacity: 0.5,
  pointerEvents: "none",
};
const ICON_STYLES = {
  width: "16px",
  height: "16px",
};
function Button({
  children,
  outline = false,
  disabled = false,
  style = {},
  width = null,
}) {
  const elementStyle = {
    ...BUTTON_STYLES,
    ...(outline && OUTLINE_STYLES),
    ...(disabled && DISABLED_STYLES),
    ...(width && {
      width: `${width}px`,
    }),
    ...style,
  };
  return (
    <button disabled={disabled} style={elementStyle}>
      {children}
      <svg
        style={ICON_STYLES}
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
