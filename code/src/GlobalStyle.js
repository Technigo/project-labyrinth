import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100vw;
  height: 100vh;
}
`