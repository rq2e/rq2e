import { memo } from "react";
import { useContextSelector } from "use-context-selector";
import DarkModeContext from "./DarkModeContext";
import Header from "./Header";

const Main = memo(function Main() {
  const isDarkMode = useContextSelector(
    DarkModeContext,
    (contextValue) => contextValue.isDarkMode
  );
  const style = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    margin: "-8px",
    minHeight: "100vh",
    boxSizing: "border-box",
  };
  return (
    <main style={style}>
      <Header />
      <h1>Welcome to our business site!</h1>
    </main>
  );
});

export default Main;
