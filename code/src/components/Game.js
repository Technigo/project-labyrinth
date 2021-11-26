import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// importing BG images
import scaryhouse from '../assets/scaryhouse.jpg';
import deadend from '../assets/deadend.jpg';
import exitway from '../assets/exitway.jpg';
import lightdoorway from '../assets/lightdoorway.jpg';
import stairs from '../assets/stairs.jpg';
import windows from '../assets/windows.jpg';

import { Starting } from './Starting';
import { Labyrinth } from './Labyrinth';
import { Loading } from './Loading';
// import { labyrinthSlice } from 'reducers/labyrinthSlice';

export const Game = () => {
  const { coordinates } = useSelector(
    (state) => state.labyrinthSlice.currentPosition
  );

  const setBgImage = () => {
    let bg = `url(${scaryhouse})`;
    switch (coordinates) {
      case '0,0':
        bg = `url(${lightdoorway})`;
        break;
      case '1,0':
        bg = `url(${windows})`;
        break;
      case '1,1':
        bg = `url(${deadend})`;
        break;
      case '0,1':
        bg = `url(${lightdoorway})`;
        break;
      case '0,2':
        bg = `url(${stairs})`;
        break;
      case '0,3':
        bg = `url(${windows})`;
        break;
      case '1,3':
        bg = `url(${exitway})`;
        break;
      default:
        bg = `url(${scaryhouse})`;
    }
    return bg;
  };

  return (
    <MainContainer style={{ background: setBgImage(coordinates) }}>
      <GameContainer>
        {coordinates ? <Labyrinth /> : <Starting />}
        <Loading />
      </GameContainer>
      <MadeBy>This game was made by Linnea Isebrink and Rebecca Blixt</MadeBy>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 150px;
  color:white;
`;

const GameContainer = styled.div`
  max-width: 600px;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  background: rgb(0,0,0, 0.3);

  @media (min-width: 599px) {
    width: 80%;
    max-width: 900px;
    padding: 40px;
    height: 60vh;
  }
`;

const MadeBy = styled.p`
  text-align: center;
  color: white;
`;
