import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import theme from "./theme";

function StyleProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default StyleProvider;
