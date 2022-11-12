/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { createGlobalStyle, css } from 'styled-components/macro';
import BackgroundImg from '../assets/background-img.jpg';

export const GlobalStyle = createGlobalStyle`

margin: 0;
padding: 0;

html {
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat; 
     background-size: cover;
     background-position: center center;
     min-height: 100%;
     background-attachment: fixed;
    /* width: 100%;
    height: 100%; */
}
  body {
    margin: 0;
    padding: 0;

    font-family: 'Permanent Marker', cursive;
  }
 
`;

export const OuterWrapper = styled.div`
  height: 100vh;

  /* padding: 100px 0; */
`;

export const InnerWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;

export const Button = styled.button`
  overflow: hidden;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin: 2%;
  font-family: 'Permanent Marker', cursive;
  line-height: 1.2;

  background-color: rgba(255, 255, 255, 0.5);

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    overflow: unset;
  }

  ${(props) =>
    props.restart &&
    css`
      /* Styling for restart button */
      position: absolute;
      bottom: 5%;
      left: 5%;
      padding: 10px;

      /* Tablet and mobile */
      @media (max-width: 1024px) {
        top: 10px;
        bottom: unset;
        padding: revert;

        /* left: 50%; */
      }
    `};
`;
