import React from 'react';
import styled from 'styled-components/macro';

function coordsToBackgroundImageWeb(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/img_1.jpg'
  } else if (coords === '1,0') {
    return './assets/images/img_2.jpg'
  } else if (coords === '1,1') {
    return './assets/images/img_3.jpg'
  } else if (coords === '0,1') {
    return './assets/images/img_4.jpg'
  } else if (coords === '0,2') {
    return './assets/images/img_5.jpg'
  } else if (coords === '0,3') {
    return './assets/images/img_6.jpg'
  } else if (coords === '1,3') {
    return './assets/images/img_7.jpg'
  }
}

function coordsToBackgroundImageMob(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/mob_img_1.png'
  } else if (coords === '1,0') {
    return './assets/images/mob_img_2.jpg'
  } else if (coords === '1,1') {
    return './assets/images/mob_img_3.jpg'
  } else if (coords === '0,1') {
    return './assets/images/mob_img_4.jpg'
  } else if (coords === '0,2') {
    return './assets/images/mob_img_5.jpg'
  } else if (coords === '0,3') {
    return './assets/images/mob_img_6.jpg'
  } else if (coords === '1,3') {
    return './assets/images/mob_img_7.jpg'
  }
}

const StyledGameImage = styled.div`
display: grid;
background-image: url(${(props) => props.sImage});
min-height: 100vh;
background-size: contain;
background-position: top;
background-repeat: no-repeat;
background-color: black;

@media (min-width: 1025px) {
    background-position: right;
    background-size: cover;
    background-image: url(${(props) => props.bgImage});
  }
`

const GameImage = ({ coordinates, children }) => {
  const bgImage = coordsToBackgroundImageWeb(coordinates);
  const sImage = coordsToBackgroundImageMob(coordinates);

  return (
    <StyledGameImage bgImage={bgImage} sImage={sImage}>{children}</StyledGameImage>
  )
}

export default GameImage;