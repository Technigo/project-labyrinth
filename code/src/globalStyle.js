import { createGlobalStyle } from 'styled-components'
import assets from './assets/forest-image.jpg'

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${assets});
    height: 100vh;
    background-size: cover;
    font-family: 'Handlee';
}`

export default GlobalStyle;