import React, { useState } from 'react';

import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';

import { useSelector } from 'react-redux';

import GameStage from './GameStage';
import Winner from './Winner';
import Compass from './Compass';

import ceiling from '../assets/ceiling.png';
import cave from '../assets/cave.png';
import last from '../assets/last.png';
import color from '../assets/color.png';
import paper from '../assets/paper.png';
import steampunk from '../assets/steampunk.png';
import colorfulcave from '../assets/colorfulcave.png';
import back from '../assets/back.gif';

import TypeWriterEffect from 'react-typewriter-effect';

const GameBox = styled.div`
  height: 150vh;
  width: 100vw;
  background-image: url(${(props) => props.bg});
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

  @media (min-width: 768px) {
    height: 100vh;
  }

  .compassBox {
    position: absolute;
    top: 3%;
    left: 10%;

    @media (min-width: 768px) {
      top: 10%;
    }
  }

  .typeBox {
    margin-bottom: 20rem;
    z-index: 5;
  }

  .react-typewriter-text-wrap {
    position: absolute;
    top: 14%;
    width: 70%;

    @media (min-width: 768px) {
      top: 20%;
    }

    .react-typewriter-text {
      font-size: 23px;

      @media (min-width: 768px) {
        font-size: 2em;
      }
    }
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  padding: 2em;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
`;

export const MainGame = () => {
  const bgSwitcher = (coordinates) => {
    switch (coordinates) {
      case '0,0':
        return cave;
      case '1,0':
        return ceiling;
      case '1,1':
        return colorfulcave;
      case '0,1':
        return steampunk;
      case '0,2':
        return color;
      case '0,3':
        return paper;
      case '1,3':
        return last;
      default:
        return back;
    }
  };

  const [width, height] = useWindowSize();
  const description = useSelector((store) => store.game.gameList.description);
  const loading = useSelector((store) => store.ui.loading);

  const gameList = useSelector((store) => store.game.gameList);
  console.log(description);

  return (
    <GameBox
      bg={() => bgSwitcher(gameList.coordinates)}
      hgt={height}
      wid={width}
    >
      <DescriptionBox>
        {!loading ? (
          <TypeWriterEffect
            key={description}
            textStyle={{
              fontFamily: 'Red Hat Display',
              backgroundColor: 'rgb(25, 25, 28, 0.7)',
              padding: '0.5rem',
              borderRadius: '10px'
            }}
            startDelay={1000}
            cursorColor='orange'
            text={description}
            typeSpeed={50}
            hideCursorAfterText={true}
          />
        ) : null}

        <GameStage />
      </DescriptionBox>
      {gameList.actions.length === 0 ? <Winner /> : null}
      <div className='compassBox'>
        <Compass />
      </div>
    </GameBox>
  );
};

//   const [isActive, setActive] = useState(false);
//   const dispatch = useDispatch();
//   const onToggleClass = () => {
//     setActive(!isActive);
//   };
