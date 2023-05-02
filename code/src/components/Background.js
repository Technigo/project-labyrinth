import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
// import { loading } from '../reducers/loading'

// const backgroundurls = [tim-roosjen-IBXb__pD17M-unsplash.png, x]
// background-image: url("../assets/images/tim-roosjen-IBXb-p-D17-M-unsplash.jpg");
// fixed bg = url("https://i.postimg.cc/2SjZZWrf/tim-roosjen-IBXb-p-D17-M-unsplash.jpg")

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.imageUrl});
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

  let imageUrl;

  if (coordinates === '0,0') {
    // You find yourself under a large archway opening into a cavern. A sense of purpose fills you.
    imageUrl = 'https://i.postimg.cc/7PdQjynJ/polina-kocheva-2-FR-8-LV-0o-Q-unsplash.jpg';
  } else if (coordinates === '0,1') {
    // large, four-walled room with mechanical gadgets
    imageUrl = 'https://i.postimg.cc/Hsrgtfyx/ryan-tauss-NLbv-Pon-5r8-unsplash.jpg';
  } else if (coordinates === '0,2') {
    // As you move through the room, the walls change colors with every step you take.
    imageUrl = 'https://i.postimg.cc/fTCwHxH2/hermes-rivera-e-N1q-Ryr-F-U0-unsplash.jpg';
  } else if (coordinates === '0,3') {
    // The mouth of the chest swings open.
    imageUrl = 'https://i.postimg.cc/N0gjsdKw/stefan-steinbauer-HK8-Io-D-5zpg-unsplash.jpg';
  } else if (coordinates === '1,0') {
    // It's warmer here. Rays of light penetrate the ceiling.
    imageUrl = 'https://i.postimg.cc/65k7XVV9/adrian-holmes-nl-YF8cju590-unsplash.jpg';
  } else if (coordinates === '1,1') {
    // The walls of the cavern seem to grow brighter and more colorful here.
    imageUrl = 'https://i.postimg.cc/kgPptZNL/bjarne-vijfvinkel-v6-K0-PXj-Zz-Ts-unsplash.jpg';
  } else if (coordinates === '1,3') {
    // END OF THE MAZE
    imageUrl = 'https://i.postimg.cc/63b31C5x/erin-alder-85p6a-P8-Mylo-unsplash.jpg';
  } else if (coordinates === '') {
    // Startpage
    imageUrl = 'https://i.postimg.cc/2SjZZWrf/tim-roosjen-IBXb-p-D17-M-unsplash.jpg';
  } else {
    // else just render the start image
    imageUrl = 'https://i.postimg.cc/2SjZZWrf/tim-roosjen-IBXb-p-D17-M-unsplash.jpg';
  }

  return (
    <div>
      {loading === undefined || !loading ? (
        <StyledBackground imageUrl={imageUrl} />
      ) : (
        <StyledNoBackground />
      )}
    </div>
  );
}

export default Background;
