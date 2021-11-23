import React, { useState } from 'react';

import styled from 'styled-components/macro';
import { useWindowSize } from '@react-hook/window-size';

import { useSelector } from 'react-redux';

import GameStage from './GameStage';

const GameBox = styled.div`
  height: ${(props) => props.hgt}px;
  width: ${(props) => props.wid}px;
  background-image: url('https://media.giphy.com/media/xT0xePQA4e8tTvFWta/giphy.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 1em;
    font-family: 'Libre Baskerville', serif;
    margin-top: 20px;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1a187a;
  width: 70%;
  height: auto;
  padding: 2em;
  align-items: center;
  border-radius: 20px;
`;

export const MainGame = () => {
  const [width, height] = useWindowSize();
  //   const [isActive, setActive] = useState(false);
  //   const dispatch = useDispatch();
  //   const onToggleClass = () => {
  //     setActive(!isActive);
  //   };

  const gameList = useSelector((store) => store.game.gameList);

  return (
    <GameBox hgt={height} wid={width}>
      <DescriptionBox>
        <h1>{gameList.description}</h1>
        <GameStage />
      </DescriptionBox>
    </GameBox>
  );
};

// <Switch (coordinates)/>
