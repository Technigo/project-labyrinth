/* eslint-disable no-nested-ternary */
// Import necessary libraries
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import UserNameInput from './UserNameInput';
import { LoadingMaze } from './LoadingIndicator';
import { GameBoard } from './GameBoard';

// Styled components
const Background = styled.div`
  width: 100vw;
  height: 100vh;
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
`;

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

// The isLoading, username, and coordinates variables are
// obtained from the Redux store using the useSelector hook.
const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);
  const coordinates = useSelector((store) => store.game.coordinates);

  // The images object contains URLs for the different maze images to be displayed.
  // The imageUrl variable is set based on the coordinates variable and
  // is used as the background image for the Background styled-component.
  const images = {
    '0,0': 'https://i.postimg.cc/5ymByDxQ/1maze.png',
    '0,1': 'https://i.postimg.cc/ZYPFwvrY/4maze.png',
    '0,2': 'https://i.postimg.cc/YqpNZ236/5maze.png',
    '0,3': 'https://i.postimg.cc/L5SkHmMM/6maze.png',
    '1,0': 'https://i.postimg.cc/wvxzcKhQ/2maze.png',
    '1,1': 'https://i.postimg.cc/wM7dZh4t/3maze.png',
    '1,3': 'https://i.postimg.cc/HxX4DVR2/7maze.png',
    default: 'https://i.postimg.cc/7LpMWgsh/start.png'
  };

  const imageUrl = images[coordinates] || images.default;

  // If the isLoading variable is true, the LoadingMaze component is rendered.
  // If the username variable is truthy, the GameBoard component is rendered.
  // If the username variable is falsy, the EnterText message and
  // UserNameInput component are rendered.

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
