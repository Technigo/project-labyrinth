import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, gamestate } from "reducers/gamestate";

import styled from 'styled-components'; 

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: auto
`
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: hsla(0,0%,100%,.06274509803921569);
  backdrop-filter: blur(4px);
  font-family: 'Press Start 2P';
  color: #C2D200;
  
  h1 {
    font-size: 26px;
  }

  form {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  }

  input {
    height: 24px;
  }

  button {
    margin-top: 15px;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid #C2D200;
    background-color: black;
    color:white;
    font-size: 14px;

	:hover {
		background: white;
		color: black;
		border: 1px solid black;
  }
  }
`

export const StartGame = () => {
  const [nameInput, setNameInput] = useState('')

	const gameStatus = useSelector((state) => state.gamestate.gameStatus);

	//const actions = useSelector((state) => state.gamestate.gameStatus.actions);
  //const loading = useSelector((state) => state.gamestate.loading);
  const dispatch = useDispatch();

	const onGameStart = (e) => {
		e.preventDefault();
    if (!nameInput) {
      alert('Please enter your name first!')
    } else {
    dispatch(gamestate.actions.setUsername(nameInput));
    dispatch(fetchGame(nameInput));
  };
};

  return (
  <Container>
		{!gameStatus.coordinates && (
		<Wrapper>
			<h1>Welcome to JD:s Labyrinth!</h1>
      <form onSubmit={onGameStart}>
				<label htmlFor="inline_field"></label>
					<input 
						required
						type="text" 
						placeholder="enter username"
						value={nameInput}
						onChange={(event) => setNameInput(event.target.value)}
					/>
					<button type='submit'>
						Let's GO!
					</button>
      </form>    
		</Wrapper>
		)}
  </Container>
  );
};

