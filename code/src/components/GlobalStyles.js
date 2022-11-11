/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import styled, { createGlobalStyle } from 'styled-components/macro';
import zeroZero from '../images/0,0.jpg'
import Start from '../images/start.jpg'

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

//regular CSS

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

body {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export const Outerwrapper = styled.div`
width: 100%;
background-image: ${(props) =>
  (props.coordinates === '0,0' ? zeroZero : Start)};
`

export const Innerwrapper = styled.div`
margin: 0 auto;
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`