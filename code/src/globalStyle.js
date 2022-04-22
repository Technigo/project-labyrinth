import { createGlobalStyle } from 'styled-components'
import assets from './assets/forest-image.jpg'

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${assets});
    height: 100vh;
    background-size: cover;
    font-family: 'Montserrat';
}`

export default GlobalStyle;