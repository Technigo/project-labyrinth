import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/background.jpg'

const StyledBackground = styled.div`
  background-image: url(${backgroundImage}); // replace with your image path
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

export const Background = () => {
  return <StyledBackground />;
};
