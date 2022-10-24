import { useContext } from "react";
import GameDataContext from "./context";

function useGameDialogs() {
  const { showResults, showWelcome } = useContext(GameDataContext);

  return {
    showResults: () => showResults?.(),
    showWelcome: () => showWelcome?.(),
  };
}

export default useGameDialogs;
