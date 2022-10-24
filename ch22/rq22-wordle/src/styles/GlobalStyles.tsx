import { Global, css } from "@emotion/react";

const globalStyles = css`
  html {
    font-size: 10px;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 600px) {
    html {
      font-size: 12px;
    }
  }
  @media (min-width: 900px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 1200px) {
    html {
      font-size: 16px;
    }
  }
  body {
    background: #111;
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  button {
    font-family: inherit;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
