/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import UserNameInput from './UserNameInput';
import { LoadingMaze } from './LoadingIndicator';
import { GameBoard } from './GameBoard';

const Background = styled.div`
width: 100vw;
height: 100vh;
${({ imageUrl }) => `
  background-image: url(${imageUrl});
`}
background-position: center;
background-size: cover;
background-repeat: no-repeat;
top: 0;
left: 0;
position: absolute;
`

const EnterText = styled.h1`
display: flex;
justify-content: center;
margin: 15rem 0rem 0 0rem;
color: white;
font-size: 24px;
`;

const HeaderText = styled.h2`
display: flex;
justify-content: center;
color: white;
`;

const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);
  const coordinates = useSelector((store) => store.game.coordinates);
  let imageUrl;

  if (coordinates === '0,0') {
    imageUrl = 'https://i.postimg.cc/9FDv5xNX/1maze.png';
  } else if (coordinates === '0,1') {
    imageUrl = 'https://i.postimg.cc/t4mKL32G/4maze.png';
  } else if (coordinates === '0,2') {
    imageUrl = 'https://i.postimg.cc/BQnw488S/5maze.png';
  } else if (coordinates === '0,3') {
    imageUrl = 'https://i.postimg.cc/zX9D9H7M/44.png';
  } else if (coordinates === '1,0') {
    imageUrl = 'https://i.postimg.cc/pTkpHc7L/2maze.png';
  } else if (coordinates === '1,1') {
    imageUrl = 'https://i.postimg.cc/Hks8kyXL/3maze.png';
  } else if (coordinates === '1,3') {
    imageUrl = 'https://i.postimg.cc/zX9D9H7M/44.png';
  } else {
    imageUrl = 'https://i.postimg.cc/zX9D9H7M/44.png';
  }

  return (
    <Background imageUrl={imageUrl}>
      {isLoading ? (
        <LoadingMaze />
      ) : username ? (
        <GameBoard />
      ) : (
        <section className="start-section">
          <EnterText>You are now entering the labyrinth so beware and tred carefully</EnterText>
          <HeaderText>The Labyrinth</HeaderText>
          <UserNameInput />
        </section>
      )}
    </Background>
  )
};

export default Main;
