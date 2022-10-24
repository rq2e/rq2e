export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html { 
     --color-primary: 175 105 238;
     font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  }
  button {
    font-family: inherit;
  }
`;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
