import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import img from '../assets/scaryhouse.jpg';

import { Starting } from './Starting';
import { Labyrinth } from './Labyrinth';
import { Loading } from './Loading';
import { labyrinthSlice } from 'reducers/labyrinthSlice';

export const Game = () => {
  const currentPosition = useSelector((state) => state.labyrinthSlice.currentPosition);

  const setBgImage = (currentPosition) => {
    let bg = `url(${img})`;
    switch (
      currentPosition //switch: needs a case that ends with a break, then more cases can be added
    ) {
      case '0,0':
        bg =
          'url(https://images.unsplash.com/photo-1471045220822-f3f0ad3a5416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80) no-repeat center center fixed';
        break;
      case '1,0':
        bg =
          'url(https://images.unsplash.com/photo-1467745870897-1f66443c8c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=354&q=80) no-repeat center center fixed';
        break;
      case '1,1':
        bg =
          'url(https://images.unsplash.com/photo-1428737289360-ca73c271d197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80) no-repeat center center fixed';
        break;
      case '0,1':
        bg =
          'url(https://images.unsplash.com/photo-1611643892561-9759a32e0c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center center fixed';
        break;
      case '0,2':
        bg =
          'url(https://images.unsplash.com/photo-1533693637260-257bd3834be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80) no-repeat center center fixed';
        break;
      case '0,3':
        bg =
          'url(https://images.unsplash.com/photo-1540979730456-da51523895df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80) no-repeat center center fixed';
        break;
      case '1,3':
        bg =
          'url(https://images.unsplash.com/photo-1541429222367-285a893182f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat center center fixed';
        break;
      default:
        bg = `url(${img})`;
    }
    return bg;
  };

  return (
    <MainContainer style={{ background: setBgImage(labyrinthSlice.currentPosition) }}>
      <GameContainer>
        {currentPosition ? <Labyrinth /> : <Starting />}
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
  background: rgb(255, 255, 255, 0.5);

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
