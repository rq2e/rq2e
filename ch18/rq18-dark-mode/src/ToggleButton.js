import { useContextSelector } from "use-context-selector";
import Button from "./Button";
import DarkModeContext from "./DarkModeContext";

function ToggleButton() {
  const toggleDarkMode = useContextSelector(
    DarkModeContext,
    (contextValue) => contextValue.toggleDarkMode
  );
  return <Button onClick={toggleDarkMode}>Toggle mode</Button>;
}

export default ToggleButton;
