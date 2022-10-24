import { OverlayProvider } from "components/overlay";
import { GameDataProvider } from "components/gamedata";
import WordGame from "./WordGame";
import { StyleProvider, GlobalStyles } from "./styles";

function App() {
  return (
    <StyleProvider>
      <OverlayProvider>
        <GameDataProvider>
          <GlobalStyles />
          <WordGame />
        </GameDataProvider>
      </OverlayProvider>
    </StyleProvider>
  );
}

export default App;
