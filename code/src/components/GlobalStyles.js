/* eslint-disable no-nested-ternary */
import styled, { createGlobalStyle } from 'styled-components/macro';
import One from '../images/One.jpg'
import Start from '../images/start.jpg'
import Zero from '../images/Zero.jpg'
import ZeroOne from '../images/ZeroOne.jpg'
import ZeroTwo from '../images/ZeroTwo.jpg'
import ZeroThree from '../images/ZeroThree.jpg'
import OneOne from '../images/OneOne.jpg'
import OneThree from '../images/OneThree.jpg'

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
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-size: cover;
  background-image: url(${(props) => (props.coordinates === '00' ? Zero : props.coordinates === '10' ? One : props.coordinates === '11' ? OneOne : props.coordinates === '01' ? ZeroOne : props.coordinates === '02' ? ZeroTwo : props.coordinates === '03' ? ZeroThree : props.coordinates === '13' ? OneThree : Start)})
`

export const Innerwrapper = styled.div`
margin: 0 auto;
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`