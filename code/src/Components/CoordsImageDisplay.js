// Import libraries to create the component
import React from 'react';
import styled from 'styled-components';

// Import the background images for the labyrinth
import background1 from './background1_web.jpg';
import background2 from './background2_web.jpg';
import background3 from './background3_web.jpg';
import background4 from './background7_web.jpg';
import background5 from './background5_web.jpg';
import background6 from './background6_web.jpg';
import background7 from './background4_web.jpg';

// Create a styled-component for the background image
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  @media (min-width: 1024px) {
    background-size: cover;
  }
`;

// Create a styled-component to hide the image used for the onLoad event
const HiddenImage = styled.img`
  display: none;
`;

// This component displays the correct background image based on the current coordinates
export const CoordsImageDisplay = ({ coordinates = '0,0', onImageLoad }) => {
  const currentCoordinates = coordinates;
  let imageToShow = null;

  // Choose the correct image based on the current coordinates
  if (currentCoordinates === '0,0') {
    imageToShow = background1;
  } else if (currentCoordinates === '1,0') {
    imageToShow = background2;
  } else if (currentCoordinates === '1,1') {
    imageToShow = background3;
  } else if (currentCoordinates === '0,1') {
    imageToShow = background4;
  } else if (currentCoordinates === '0,2') {
    imageToShow = background5;
  } else if (currentCoordinates === '0,3') {
    imageToShow = background6;
  } else if (currentCoordinates === '1,3') {
    imageToShow = background7;
  }

  return (
    <>
      {/* Set the background image based on the selected image */}
      <BackgroundImage style={{ backgroundImage: `url(${imageToShow})` }} />
      {/* Hidden image to trigger the onLoad event when the image is loaded */}
      <HiddenImage
        src={imageToShow}
        onLoad={() => {
          if (onImageLoad) onImageLoad();
        // Remove the following line
        // if (onContentLoaded) onContentLoaded();
        }} />
    </>
  );
};
