import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
// import { loading } from '../reducers/loading'

// const backgroundurls = [tim-roosjen-IBXb__pD17M-unsplash.png, x]

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("https://i.postimg.cc/2SjZZWrf/tim-roosjen-IBXb-p-D17-M-unsplash.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.8;
`

const StyledNoBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.8;
`

const Background = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loading = useSelector((store) => store.loading.isLoading)
  console.log('coordinates:', coordinates)
  console.log('loading:', loading)

  return (
    <div>
      {loading === undefined || !loading ? (
        <StyledBackground />
      ) : (
        <StyledNoBackground />
      )}
    </div>
  );
}

export default Background;

/*
const Background = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loading = useSelector((store) => store.loading.isLoading)
  console.log('coordinates:', coordinates)
  console.log('loading:', loading)
  return (
    {!loading && (
    <StyledBackground />
    )}
    {loading && (
      <StyledNoBackground />
    )}
  )
} */