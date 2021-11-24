import React from 'react';

import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';

import { useSelector } from 'react-redux';

import GameStage from './GameStage';
import ceiling from '../assets/ceiling.png';
import cave from '../assets/cave.png';
import last from '../assets/last.png';
import color from '../assets/color.png';
import paper from '../assets/paper.png';
import steampunk from '../assets/steampunk.png';
import colorfulcave from '../assets/colorfulcave.png';

const typing = keyframes`
	from {width: 0};
    to {width:100%};
`;

const blinkCaret = keyframes`
	from,
    to {border-color: transparent;
  }
  50% {
    border-color: orange;
  }
`;

const GameBox = styled.div`
  height: ${(props) => props.hgt}px;
  width: ${(props) => props.wid}px;
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

  .typewriter {
    word-break: break-word;
    max-width: 65%;
    display: inline-block;
  }
  .typewriter h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: normal;
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blinkCaret 0.75s step-end infinite;
    font-size: 1em;
    font-family: 'Libre Baskerville', serif;
    margin-top: 20px;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
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
        return 'error';
    }
  };

  const [width, height] = useWindowSize();

  const gameList = useSelector((store) => store.game.gameList);

  return (
    <GameBox
      bg={() => bgSwitcher(gameList.coordinates)}
      hgt={height}
      wid={width}
    >
      <DescriptionBox>
        <div className='typewriter'>
          <h1>{gameList.description}</h1>
        </div>
        <GameStage />
      </DescriptionBox>
    </GameBox>
  );
};

//   const [isActive, setActive] = useState(false);
//   const dispatch = useDispatch();
//   const onToggleClass = () => {
//     setActive(!isActive);
//   };
