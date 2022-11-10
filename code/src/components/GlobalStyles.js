import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
// RESET CSS
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
  height: 100%;
}
`

export const Outerwrapper = styled.div`
margin: 0 auto;
width: 80%;
height: 100%;
display: flex;
align-items: center;

`