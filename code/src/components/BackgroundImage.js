import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const fadeIn = keyframes`
  from {
    opacity: 0;
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
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    animation: ${fadeIn} 2.5s ease-in;
`;

const BackgroundImage = () => {
  const coordinates = useSelector((store) => store.game.currentLocation.coordinates);
  const isStartScreen = useSelector((store) => store.game.isStartScreen);
  const isEndScreen = useSelector((store) => store.game.isEndScreen);

  const selectBackgroundImage = () => {
    if (isStartScreen) {
      return `url(${process.env.PUBLIC_URL}/assets/start-screen.jpg)`;
    } else if (isEndScreen) {
      return `url(${process.env.PUBLIC_URL}/assets/pexels-pixabay-45848.jpg)`;
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
        return `url(${process.env.PUBLIC_URL}/assets/pexels-tima-miroshnichenko-9572622.jpg)`;

      default: // Fall back img
        return `url(${process.env.PUBLIC_URL}/assets/archway-step1.png)`;
    }
  };

  return (
    <StyledBackground
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.15)), ${selectBackgroundImage()}`
      }} />
  );
};

export default BackgroundImage;
