import { createContext } from "react";
import { Callback, Profile, UpdateCallback, WordInfo } from "types";

interface GameData {
  profile: Profile;
  wordInfo: WordInfo;
  updateState: UpdateCallback;
  showResults: Callback;
  showWelcome: Callback;
}

const GameDataContext = createContext<Partial<GameData>>({});

export default GameDataContext;
