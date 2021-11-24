import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, gamestate } from "reducers/gamestate";

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
  <>
		{!gameStatus.coordinates && (
		<>
			<h1>Welcome to the JD:s Labyrinth Game!</h1>
			<form onSubmit={onGameStart}>
				<label htmlFor="inline_field">Enter your name</label>
					<input 
						required
						type="text" 
						placeholder="enter username"
						value={nameInput}
						onChange={(event) => setNameInput(event.target.value)}
					/>
					<button type='submit'>
						Start game
					</button>
			</form>
		</>
		)}
  </>
  );
};

