import { PropsWithChildren, useEffect, useState } from "react";
import GameDataContext from "./context";
import useProfile from "./useProfile";
import getWordOfTheDay from "utils/getWordOfTheDay";
import { useDialog } from "components/overlay";

function GameDataProvider({ children }: PropsWithChildren) {
  const { profile, updateState } = useProfile();
  const wordInfo = getWordOfTheDay();
  const [isFirstVisit, setFirstVisit] = useState(
    profile.games === 0 && profile.today.rows.length === 0
  );
  const { showWelcomeDialog, showResultDialog } = useDialog();
  useEffect(() => {
    if (isFirstVisit) {
      showWelcomeDialog();
      setFirstVisit(false);
    }
  }, [isFirstVisit, showWelcomeDialog]);
  const showResults = () => showResultDialog({ profile, word: wordInfo.word });
  const value = {
    profile,
    wordInfo,
    updateState,
    showResults,
    showWelcome: showWelcomeDialog,
  };
  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
}

export default GameDataProvider;
