import { useSelector } from 'react-redux';
import React from 'react';

export const BackgroundImage = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)

  let backgroundImageSrc;

  if (coordinates === '0,0') {
    backgroundImageSrc = './images/ScreenTwo.jpg'
  } else if (coordinates === '0,1') {
    backgroundImageSrc = './images/ScreenFive.jpg'
  } else if (coordinates === '0,2') {
    backgroundImageSrc = './images/ScreenSix.jpg'
  } else if (coordinates === '0,3') {
    backgroundImageSrc = './images/ScreenSeven.jpg'
  } else if (coordinates === '1,0') {
    backgroundImageSrc = './images/ScreenThree.jpg'
  } else if (coordinates === '1,1') {
    backgroundImageSrc = './images/ScreenFour.jpg'
  } else if (coordinates === '1,3') {
    backgroundImageSrc = './images/FinalScreen.jpg'
  } else if (coordinates === '') {
    backgroundImageSrc = './images/welcomeScreen.jpg'
  } else { backgroundImageSrc = './images/welcomeScreen.jpg' }

  const background = {
    backgroundImage: `url(${backgroundImageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh'
  }

  return (
    <section style={background} />
  )
};