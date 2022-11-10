import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'VT323', monospace;
    background-color: black;
    color: green ;
    font-size: 16px;
    margin: 0;
  }

  a:link {
  text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: 1px solid green;
    color: green;
    width: fit-content;
    font-family: 'VT323', monospace;
    font-size: 16px;
  }
`