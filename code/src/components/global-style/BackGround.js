import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'images/background.jpg'
import endImage from 'images/end-game-image.jpg'

const StyledBackground = styled.div`
  background-image: url(${(props) => props.image}); // replace with your image path
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Background = ({ coordinates }) => {
  let imageToShow = backgroundImage;

  switch (coordinates) {
    case '0,0':
    case '1,0':
    case '1,1':
    case '0,1':
    case '0,2':
    case '0,3':
      imageToShow = backgroundImage;
      break;
    case '1,3':
      imageToShow = endImage;
      break;
    default:
      break;
  }

  return <StyledBackground image={imageToShow} />;
};