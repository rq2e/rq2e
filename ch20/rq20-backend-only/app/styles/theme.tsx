// my-theme.ts
import { ThemeProvider, createGlobalStyle } from "styled-components";
import type { DefaultTheme } from "styled-components";
import type { PropsWithChildren } from "react";

const theme: DefaultTheme = {
  colors: {
    melon: "#F6B1A2",
    vodka: "#C6B6FB",
    crayola: "#9CADBF",
    quartz: "#A84D92",
    palatinate: "#3C48D7",
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Provider;
