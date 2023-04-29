import { useSelector } from 'react-redux';
import React from 'react';

const BACKGROUND_IMAGES = {
  '0,0': './images/ScreenTwo.jpg',
  '0,1': './images/ScreenFive.jpg',
  '0,2': './images/ScreenSix.jpg',
  '0,3': './images/ScreenSeven.jpg',
  '1,0': './images/ScreenThree.jpg',
  '1,1': './images/ScreenFour.jpg',
  '1,3': './images/FinalScreen.jpg'
};

export const BackgroundImage = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates);
  const backgroundImageSrc = BACKGROUND_IMAGES[coordinates] || './images/welcomeScreen.jpg';

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
    backgroundSize: 'cover',
    width: '100%',
    position: 'absolute',
    top: '0',
    height: '100%',
    zIndex: '-1'
  };

  return <div style={backgroundStyle} />;
};