/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import UserNameInput from './UserNameInput';
import { LoadingMaze } from './LoadingIndicator';
import { GameBoard } from './GameBoard';

const Background = styled.div`
width: 100%;
height: 100%;
margin: 0;
top: 0;
left: 0;
position: absolute;
${({ imageUrl }) => `
  background-image: url(${imageUrl});
`}
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

const EnterText = styled.h1`
margin: 0 auto;
color: white;
text-align: center;
padding: 20px 0 50px 0;
font-size: 24px;
max-width: 460px;
text-shadow: 2px 2px 3px #ff00d9e1;
`;

const HeaderText = styled.h1`
text-align: center;
margin: 0 auto;
font-size: 34px;
color: white;
padding-top: 60px;
text-shadow: 2px 2px 3px #ff00d9e1;
`;

const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);
  const coordinates = useSelector((store) => store.game.coordinates);
  let imageUrl;

  if (coordinates === '0,0') {
    imageUrl = 'https://i.postimg.cc/5ymByDxQ/1maze.png';
  } else if (coordinates === '0,1') {
    imageUrl = 'https://i.postimg.cc/ZYPFwvrY/4maze.png';
  } else if (coordinates === '0,2') {
    imageUrl = 'https://i.postimg.cc/YqpNZ236/5maze.png';
  } else if (coordinates === '0,3') {
    imageUrl = 'https://i.postimg.cc/L5SkHmMM/6maze.png';
  } else if (coordinates === '1,0') {
    imageUrl = 'https://i.postimg.cc/wvxzcKhQ/2maze.png';
  } else if (coordinates === '1,1') {
    imageUrl = 'https://i.postimg.cc/wM7dZh4t/3maze.png';
  } else if (coordinates === '1,3') {
    imageUrl = 'https://i.postimg.cc/HxX4DVR2/7maze.png';
  } else {
    imageUrl = 'https://i.postimg.cc/7LpMWgsh/start.png';
  }

  return (
    <Background imageUrl={imageUrl}>
      {isLoading ? (
        <LoadingMaze />
      ) : username ? (
        <GameBoard />
      ) : (
        <section className="start-section">
          <HeaderText>The Labyrinth</HeaderText>
          <EnterText>You are now entering the labyrinth, beware and tred carefully</EnterText>
          <UserNameInput />
        </section>
      )}
    </Background>
  )
};

export default Main;
