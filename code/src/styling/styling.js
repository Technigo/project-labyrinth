import styled from 'styled-components';

import backgroundImage from "img/dungeon.jpg";

// Global styling goes here

export const BackgroundContainer = styled.main`
 background-image: url(${backgroundImage});
 height: 100vh;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 
`;

export const TextContainer = styled.section`
  background: #000000;
  color: #ffffff;
  border-radius: 10px;
  width: 90%;
  padding: 5px;
  opacity: 0.8;
  text-align: center;
  
  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
  `;