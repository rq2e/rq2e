import { useContext } from "react";
import GameDataContext from "./context";

function useGameData() {
  const { wordInfo, profile, updateState, showResults } =
    useContext(GameDataContext);

  return {
    updateState,
    showResults,
    initialGrid: profile?.today.rows,
    word: wordInfo?.word || "",
  };
}

export default useGameData;
