import { useState, useCallback } from "react";
import DarkModeContext from "./DarkModeContext";
import Main from "./Main";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => setDarkMode((v) => !v), []);
  const contextValue = { isDarkMode, toggleDarkMode };
  return (
    <DarkModeContext.Provider value={contextValue}>
      <Main />
    </DarkModeContext.Provider>
  );
}

export default App;
