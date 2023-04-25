import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

// const backgroundurls = [tim-roosjen-IBXb__pD17M-unsplash.png, x]

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("./assets/images/tim-roosjen-IBXb__pD17M-unsplash.jpg");
    background-color: #000;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
`

const Background = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log('coordinates:', coordinates)
  return (
    <StyledBackground />
  )
}

export default Background;