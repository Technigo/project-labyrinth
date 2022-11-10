import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import styled from 'styled-components'
import Lottie from "lottie-react";
import charlotteMaze from "lotties/charlotteMaze";


const PlayerInput = () => {
  const [playerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(playerInputValue));
    dispatch(createPlayer());
  }

  return (
    <InnerWrapper>
        <Lottie animationData={charlotteMaze} loop={true}/>;
      <h1>Welcome to the labyrinth!</h1>
      <h3>Do you want to play a game?</h3>
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="player-input">
      Enter your name:
        <input id="player-input" required type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
      </label>
      <button type="submit">Start the game!</button>
    </form>
    </InnerWrapper>
    )
}

export default PlayerInput;

const InnerWrapper = styled.div`
/* border: solid red 2px; */
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 50vh;
height: 50vh;
color: white;
// margin-top: 20%;

form {
  /* border: solid orange 2px; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  width: 250px;
  height: 30px;
  margin: 20px 10px 20px 20px;
  padding: 0.5vh 2vw;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
}

label{
/* border: solid green 2px; */
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
font-size: 20px;
}

h3{
  font-size: 24px;
  margin-top: 0;
}

button{
margin: 10px;
padding: 5px;
border: solid white 2px;
border-radius: 15px;
color: white;
background: none;
padding: 7px;
font-size: 18px;
&:hover{
  background: white;
  color: black;
}
}
`