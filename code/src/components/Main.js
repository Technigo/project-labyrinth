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
margin: 15rem 2rem 0 2rem;
color: white;
font-size: 34px;
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
    imageUrl = 'https://i.postimg.cc/pV8sx0sd/maze-1.png';
  } else if (coordinates === '0,1') {
    imageUrl = 'https://i.postimg.cc/bJS3ZL83/maze-4.png';
  } else if (coordinates === '0,2') {
    imageUrl = 'https://i.postimg.cc/9FY1wD55/maze-5.png';
  } else if (coordinates === '0,3') {
    imageUrl = 'https://i.postimg.cc/RVBX0cYL/maze-6.png';
  } else if (coordinates === '1,0') {
    imageUrl = 'https://i.postimg.cc/52P3pD2s/maze-2.png';
  } else if (coordinates === '1,1') {
    imageUrl = 'https://i.postimg.cc/Gt0zGYmr/maze-3.png';
  } else if (coordinates === '1,3') {
    imageUrl = 'https://i.postimg.cc/Dz8cN5Wn/maze-7.png';
  } else {
    imageUrl = 'https://i.postimg.cc/x1j5v9nk/maze-intro.png';
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
