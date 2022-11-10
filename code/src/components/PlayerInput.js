import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import styled from 'styled-components'

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
      <h1>text text </h1>
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="player-input">
      Enter your name:
        <input id="player-input" type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
      </label>
      <button type="submit">Start the game!!!</button>
    </form>
    </InnerWrapper>
    )
}

export default PlayerInput;

const InnerWrapper = styled.div`
border: solid red 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 50vh;
height: 50vh;
color: white;
// margin-top: 20%;

form {
  border: solid orange 2px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

label{
  border: solid green 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
}

button{
margin: 10px;
padding: 5px;
border: solid white 2px;
color: white;
background: none;
&:hover{
  background: white;
  color: black;
}
}
`