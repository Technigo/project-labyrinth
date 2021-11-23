import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGameInstructions } from 'reducers/game';
import styled from 'styled-components';
import { useWindowSize } from '@react-hook/window-size';

import { useSelector } from 'react-redux';

const GameBox = styled.div`
  height: ${(props) => props.hgt}px;
  width: ${(props) => props.wid}px;
  background-image: url('https://media.giphy.com/media/xT0xePQA4e8tTvFWta/giphy.gif');
  background-no-repeat: no-repeat;
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
    font-size: 0.6em;
    font-family: 'Libre Baskerville', serif;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1a187a;
  width: 70%;
  height: auto;
  padding: 2em;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1a187a;
  width: 70%;
  height: auto;
  padding: 2em;

  .btn-home {
    margin: 10px auto;
    width: 250px;
    letter-spacing: 2px;
    border-radius: 8px;
    font-family: 'Libre Baskerville', serif;
    color: #ffc000;
    font-size: 18px;
    font-weight: 400;
    text-shadow: 0 1px 3px #000;
    text-align: center;
    padding: 10px 0;
    background: radial-gradient(circle, #8b0000, #8b0000);
    border-top: 4px ridge #ffb000;
    border-left: 4px groove #ffb000;
    border-right: 4px ridge #ffb000;
    border-bottom: 4px groove #ffb000;
    box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
  }

  .btn-home:hover {
    background: radial-gradient(circle, #e52b2b, #8b0000);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }

  .btn-home:active {
    background: radial-gradient(circle, #ec6a6a, #e52b2b);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
`;

const NextStepText = styled.p`
	&.show
	font-size: 1em;
  margin: 0px 0px 10px 0px;

	&.hide {
		display: none;
	}
`;

export const MainGame = () => {
  const [width, height] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const onToggleClass = () => {
    setActive(!isActive);
  };

  const gameList = useSelector((store) => store.game.gameList);

  return (
    <GameBox hgt={height} wid={width}>
      <DescriptionBox>
        <h1>{gameList.description}</h1>
        <TextBox>
          {gameList.actions.map((item, index) => (
            <div key={item.direction} className=''>
              <NextStepText>{item.description}</NextStepText>
              <button
                className='btn-home'
                key={item.description}
                onClick={() => {
                  onToggleClass();
                  dispatch(
                    fetchGameInstructions({ direction: item.direction })
                  );
                }}
              >
                Go {item.direction}
              </button>
            </div>
          ))}
        </TextBox>
      </DescriptionBox>
    </GameBox>
  );
};

// <Switch (coordinates)/>
