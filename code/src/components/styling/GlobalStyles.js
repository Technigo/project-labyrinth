import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'VT323', monospace;
    background-color: #fff;
    color: #533A32 ;
    font-size: 18px;
    margin: 0;
  }
  button {
    background-color: transparent;
    border: 1px solid #533A32;
    color: #533A32;
    width: 100%;
    font-family: 'VT323', monospace;
    font-size: 18px;
    padding: 10px;
  }
`;
