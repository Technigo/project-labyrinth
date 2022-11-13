/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { createGlobalStyle, css } from 'styled-components/macro';
import BackgroundImg from '../assets/background-img.jpg';

/* styling for entire file */
export const GlobalStyle = createGlobalStyle`

margin: 0;
padding: 0;

/* background image layout */
html {
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat; 
     background-size: cover;
     background-position: center center;
     min-height: 100%;
     background-attachment: fixed;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Permanent Marker', cursive;
  }
`;

/* Outer wrapper */
export const OuterWrapper = styled.div`
  height: 100vh;
`;

/* Inner wrapper */
export const InnerWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;

/* All buttons main styling (startm restart, direction) */
export const Button = styled.button`
  overflow: hidden;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 15px;
  cursor: pointer;
  margin: 2%;
  padding: 1%;
  font-family: 'Permanent Marker', cursive;
  line-height: 1.2;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.5);

  :hover {
    opacity: 0.8;
  }

  /* media query for buttons on phone and desktop */
  @media (max-width: 1024px) {
    overflow: unset;
  }

  ${(props) =>
    props.restart &&
    /* Styling for restart button */
    css`
      position: absolute;
      bottom: 5%;
      left: 5%;
      padding: 10px;

      @media (max-width: 667px) {
        top: 5px;
        bottom: unset;
        padding: revert;
      }

      /* Tablet and mobile */
      @media (min-width: 668px) and (max-width: 1024px) {
        top: 10px;
        bottom: unset;
        padding: revert;
      }
    `};
`;
