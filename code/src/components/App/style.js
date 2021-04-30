import { createGlobalStyle } from 'styled-components/macro';

import background from 'assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #4e4a4e;
  }
  body {
    margin: 0;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(22, 22, 22, 0.205), rgba(22, 22, 22, 0.781)),
      url(${background});
    background-attachment: fixed;
  }
  
  // Base Typography
  p, h1, button, input, label { 
    font-family: 'Press Start 2P', cursive; 
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    line-height: 32px;
  }
  
  // Typography for smaller screens
  @media screen and (max-width: 600px) {
    p, h1, button, input { font-family: 'Courier New', monospace; }
    p, button, input {
      font-size: 18px;
      letter-spacing: 2px;
    }
    button {
      font-weight: bold;
    }
  }
  
`;

export default GlobalStyle;
