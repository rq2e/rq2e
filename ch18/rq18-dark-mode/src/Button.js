import { useContextSelector } from "use-context-selector";
import DarkModeContext from "./DarkModeContext";

function Button({ children, ...rest }) {
  const isDarkMode = useContextSelector(
    DarkModeContext,
    (contextValue) => contextValue.isDarkMode
  );
  const style = {
    backgroundColor: isDarkMode ? "#333" : "#CCC",
    border: "1px solid",
    color: "inherit",
  };
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
