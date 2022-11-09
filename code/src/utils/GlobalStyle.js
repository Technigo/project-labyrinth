import styled, { createGlobalStyle } from 'styled-components/macro'
import BackgroundImg from '../assets/background-img.jpg'

export const GlobalStyle = createGlobalStyle`
html {
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat; 
     background-size: cover;
     background-position: center center;
    width: 100%;
    height: 100%;
}
  body {
    margin: 0;
    padding: 0;

    font-family: 'Permanent Marker', cursive;
  }
 
`;

export const OuterWrapper = styled.div`
width: 100%;
`;

export const InnerWrapper = styled.div`
width: 80%;
margin: 0 auto;
`;