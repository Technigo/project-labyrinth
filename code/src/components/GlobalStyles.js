import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-1: rgba(204, 194, 184, 0.5);
    --primary-color-2: #F5F5F5;
    --neutral-light: #FFFFFF;
    --neutral-medium: #525252;
    --neutral-dark: #000000;
    --font-family: 'Poltawski Nowy', serif;
    --secondary-font-family-1: 'Special Elite', cursive;
    --secondary-font-family-2: 'Nanum Gothic Coding', monospace;
    --font-size: 16px;
  }

  html {
    font-size: var(--font-size);
    font-family: var(--font-family);
    color: var(--neutral-dark);
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
 }

  button {
    color: var(--neutral-dark);
    background-color: var(--neutral-light);
  }
`;