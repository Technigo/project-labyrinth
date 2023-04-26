import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { Img1 } from 'components/Images';

const BodyImg = () => {
  const coordinates = useSelector((store) => store.maze.coordinates);

  if (coordinates === '0,0') {
    return <Img1 />
  }
};

export const Body = createGlobalStyle`
  body {
    font-family: 'Sanchez', serif;
    background-image: url(${BodyImg});
  }
`;
