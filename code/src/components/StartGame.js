import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, gamestate } from "reducers/gamestate";

import { Container, Wrapper } from "../styled-components/GameWrapperStyling"

export const StartGame = () => {
  const [nameInput, setNameInput] = useState('')
	const gameStatus = useSelector((state) => state.gamestate.gameStatus);

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
				<label htmlFor="inline_field">Enter your name</label>
					<input 
						required
						type="text" 
						placeholder="Username"
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

