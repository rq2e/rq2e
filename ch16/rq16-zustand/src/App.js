import { createGlobalStyle } from "styled-components";

import Things from "./things";
import DataProvider from "./data";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <Things />
    </DataProvider>
  );
}

export default App;
