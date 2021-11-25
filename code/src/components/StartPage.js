import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { gamestate } from 'reducers/gamestate';
import { fetchGameInstructions } from 'reducers/gamestate';
import styled from 'styled-components';
import music from "../assets/maze-music.mp3";

import { GameBackground } from './StyledComponents/GameBackground';


export const StartPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const setUsernameInStore = (event) => {
    event.preventDefault();

    dispatch(gamestate.actions.setUsername(username))

    dispatch(fetchGameInstructions(username));

  };

  // const setUsername = (event) => {
  //   username(event.target.value);
  // };

  let audio = new Audio(music);
  const startMusic = () => {
    audio.play();
    audio.volume = 0.4;
  };
  startMusic();


  return (

   <GameBackground backgroundImage={"../assets/img/start-image.jpg"}>
    <StartScreen>
      <StartForm onSubmit={setUsernameInStore}>
        <Label>
          Enter Username:
          <div>
          <Input
            color="secondary"
            type="text"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)} 
            
          />
          </div>
        </Label>
        <StartButton type="submit">Begin!</StartButton>

      </StartForm>
      </StartScreen>
      </GameBackground>
  );
};

const StartScreen = styled.section`  
  width: 100%;
  height: 100vh;
  font-family: 'Philosopher', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const Input = styled.input`
  line-height: 1.5;
  margin: 40px 0 30px 0;
  border: none;
  background: none;
  border-bottom: 2px solid #fda;
  font-family: 'Philosopher', sans-serif;
  font-size: 20px;
  color: #fff;

`
const Label = styled.label`
margin-left: 20px;
`
const StartForm = styled.form`
  color: #fda;
  font-size: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StartButton = styled.button`
  font-family: 'Philosopher', sans-serif;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  border: 2px solid #fda;
  background-color: #8A9A5B;
  color: #355E3B;
  font-family: 'Philosopher', sans-serif;
  font-size: 20px;
  text-decoration: none;
  margin: 20px auto;
  transition: color 0.4s; 
  cursor: pointer;
  color: #FFFFFF;
  text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;

  &:after {
  content:" ";
  border: 2px solid rgba(0,0,0,0);
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.4s;
  }
 
  &:hover {
    color: #fda;
  }

  &:hover:after { 
  border: 2px solid #fda;
  width: calc(100% - 10px);
  height: calc(100% + 10px); 
  }
`

