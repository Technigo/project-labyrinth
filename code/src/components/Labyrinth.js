import React from 'react';
import { useSelector } from 'react-redux';

import { StartGame } from './StartGame';

const Labyrinth = () => {
  const response = useSelector(state => state.start.response);
  const coordinates = useSelector(state => state.start.response.coordinates);

  // const isEmpty = obj => {
  //   for (var prop in obj) {
  //     if (obj.hasOwnProperty(prop)) {
  //       return false;
  //     }
  //   }
  //   return JSON.stringify(obj) === JSON.stringify({});
  // };

  return <main coordinates={coordinates}>{/* <Loading /> */}</main>;
};

export default Labyrinth;
