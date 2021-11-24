import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";

import { game, startGame } from "../reducers/game";

export const StartPage = () => {
	const [inputName, setInputName] = useState("");
	const username = useSelector((state) => state.game.username);
	const loading = useSelector((state) => state.ui.loading);

	const dispatch = useDispatch();

	const onInputNameChange = (event) => {
		event.preventDefault();
		dispatch(game.actions.setUsername(inputName));
		// setInputName("");
	};

	const start = () => {
		dispatch(startGame(username));
		dispatch(game.actions.setGameStarted());
	};

	return (
		<>
			{loading && <Loader />}
			{!username && (
				<form onSubmit={onInputNameChange}>
					<label>
						Choose a username
						<input
							placeholder="username"
							type="text"
							value={inputName}
							onChange={(event) => setInputName(event.target.value)}
						/>
					</label>
					<button type="submit">Submit username</button>
				</form>
			)}
			{username && <button onClick={start}>Start</button>}
		</>
	);
};
