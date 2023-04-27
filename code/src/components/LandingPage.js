import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/assets/img1.jpg');
  background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const LandingPage = ({ onStartGame }) => {
  return (

    <Background>
      <h1> Welcome to the Adventure! </h1>
      <p>
         Are you ready to begin your adventure?
      </p>
      <button type="button" onClick={onStartGame}>
       Start Game
      </button>
    </Background>

  )
}
export default LandingPage;