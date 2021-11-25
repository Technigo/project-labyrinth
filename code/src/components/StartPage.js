import React, { useState } from 'react';
import { fetchGame, game } from 'reducers/game';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import background from '../assets/back.gif';
import { useWindowSize } from '@react-hook/window-size';

const StartBox = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-no-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Libre Baskerville', serif;

  .textBox {
    height: 15rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn-home {
    font-family: 'Libre Baskerville', serif;
    margin: 10px auto;
    width: 200px;
    letter-spacing: 2px;
    border-radius: 8px;
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

  input {
    font-family: 'Libre Baskerville', serif;
    margin: 10px auto;
    width: 200px;
    letter-spacing: 2px;
    border-radius: 8px;
    color: black;
    font-size: 18px;
    font-weight: 400;
    text-shadow: 0 1px 3px #000;
    text-align: center;
    padding: 10px 0;
    border-top: 4px ridge #ffb000;
    border-left: 4px groove #ffb000;
    border-right: 4px ridge #ffb000;
    border-bottom: 4px groove #ffb000;
    box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
    background: radial-gradient(circle, #d0b784, #9b978f);
  }

  h1 {
    color: #9296ac;
    font-size: 2.5em;
    margin-top: 3em;
  }
`;

export const StartPage = ({ startBgMusic }) => {
  const [width, height] = useWindowSize();
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  console.log(width);

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
  };

  const onSetName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (name) => {
    onNameSubmit(name);
    dispatch(fetchGame(name));
    setName('');
    startBgMusic();
  };

  //   let audio = new Audio(bgMusic);
  //   const startBgMusic = () => {
  //     audio.volume = 0.2;
  //     audio.loop = true;
  //     audio.play();
  //   };

  return (
    <StartBox hgt={height} wid={width}>
      <h1>The Labyrinth</h1>
      <div className='textBox'>
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={onSetName}
          onKeyDown={(e) => e.key === 'Enter' && onSubmit(name)}
        />

        <button
          disabled={name === ''}
          className='btn-home'
          onClick={() => {
            onSubmit(name);
          }}
        >
          Start Game
        </button>
      </div>
    </StartBox>
  );
};
