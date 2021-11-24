import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Labyrinth } from './Labyrinth';
import { start } from '../reducers/start';

import styled from 'styled-components';

// import { Main } from './StyledComponents';

export const Main = styled.main`
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
`;

export const ShowGame = () => {
  const username = useSelector(store => store.start.username);
  // const coordinates = useSelector(store => store.start.coordinates);

  // const isEmpty = obj => {
  //   for (var prop in obj) {
  //     if (obj.hasOwnProperty(prop)) {
  //       return false;
  //     }
  //   }
  //   return JSON.stringify(obj) === JSON.stringify({});
  // };

  return (
    // <Main coordinates={coordinates}>
    <Main>{username ? <Labyrinth /> : <StartPage />}</Main>
  );
};
