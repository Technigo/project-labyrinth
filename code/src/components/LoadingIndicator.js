// Import necessary libraries
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

// Create a styled container for the Lottie animation
const LottieContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  & > div {
    width: 25vw; // Set the width of the Lottie animation to 25% of the viewport width
    height: 25vh; // Set the height of the Lottie animation to 25% of the viewport height
  }

  .lottie {
    margin: auto; // Center the Lottie animation within its container
  }
`;

// Create a component for the loading animation using the Lottie animation library
export const LoadingMaze = () => {
  return (
    <LottieContainer>
      <Player
        loop // Set the animation to loop
        autoplay // Set the animation to play automatically
        src="https://assets2.lottiefiles.com/private_files/lf30_ployuqvp.json" // Set the source of the animation
        className="lottie" // Add a class to the Lottie animation for styling purposes
        speed={1} />
    </LottieContainer>
  )
};