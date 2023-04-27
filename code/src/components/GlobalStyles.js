import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-1: #F5F5F5;
    --primary-color-2: #FAC65D;
    --primary-color-3: #4E80D5;
    --primary-color-4: #FF90D1;
    --secondary-color-1: #D9D9D9;
    --secondary-color-2: #E39F49;
    --secondary-color-3: #3253A8;
    --secondary-color-4: #F80A0A;
    --neutral-light: #FFFFFF;
    --neutral-medium: #525252;
    --neutral-dark: #000000;
    --font-family: 'Poltawski Nowy', serif;
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
  }

  header, section, footer {
    padding: 10px;
  }
`;