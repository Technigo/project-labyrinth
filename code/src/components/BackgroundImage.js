import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

const StyledBackground = styled.div`
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    animation: ${fadeIn} 1.5s ease-in;
`;

const BackgroundImage = () => {
  const coordinates = useSelector((store) => store.game.currentLocation.coordinates);
  const isStartScreen = useSelector((store) => store.game.isStartScreen);
  const isEndScreen = useSelector((store) => store.game.isEndScreen);
  const isLoading = useSelector((store) => store.game.isLoading)

  const selectBackgroundImage = () => {
    if (isStartScreen) {
      return `url(${process.env.PUBLIC_URL}/assets/start-screen.jpg)`;
    } else if (isEndScreen) {
      return `url(${process.env.PUBLIC_URL}/assets/pexels-pixabay-45848.jpg)`;
    } else if (isLoading) {
      return '';
    }

    switch (coordinates) {
      case '0,0': // Step 1
        return `url(${process.env.PUBLIC_URL}/assets/archway-step1.png)`;
      case '1,0': // Step 2
        return `url(${process.env.PUBLIC_URL}/assets/bridge-step2.png)`;
      case '1,1': // Step 3
        return `url(${process.env.PUBLIC_URL}/assets/pathway-step3.png)`;
      case '0,1': // Step 4
        return `url(${process.env.PUBLIC_URL}/assets/machine-step4.png)`;
      case '0,2': // Step 4
        return `url(${process.env.PUBLIC_URL}/assets/room-step5.jpg)`;
      case '0,3': // Step 5
        return `url(${process.env.PUBLIC_URL}/assets/bookshelves.png)`;

      default: // Fall back img
        return `url(${process.env.PUBLIC_URL}/assets/archway-step1.png)`;
    }
  };

  return (
    <StyledBackground
      key={coordinates}
      style={{
        backgroundColor: isLoading ? 'rgba(204, 194, 184, 0.5)' : 'transparent',
        backgroundImage: isLoading
          ? 'none'
          : `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), ${selectBackgroundImage()}`
      }} />
  );
};

export default BackgroundImage;
