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

html {
  html {
    font-size: 16px;
  }
}

body {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

span {
  display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.instructions {
  background-color: #323737;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 10px 5px;
  width: 100%;
  animation: fadeIn 1s; 
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.hidden-instructions {
  display: none;
}

@media (min-width: 668px) {
  html {
    font-size: 20px;
  }

    }
@media (min-width: 1025px) {
  html {
    font-size: 22px;
  }
}

`
export const Outerwrapper = styled.div`
width: 100%;
background-image: ${(props) =>
  (props.coordinates === '0,0' ? zeroZero : Start)};
  height: 100%;
`

export const Innerwrapper = styled.div`
margin: 0 auto;
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`