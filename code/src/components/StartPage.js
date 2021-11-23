import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { game, fetchGameData } from "../reducers/game";

export const StartPage = () => {
	const [inputName, setInputName] = useState("");
	const username = useSelector((state) => state.game.username);

	const dispatch = useDispatch();

	const onInputNameChange = (event) => {
		event.preventDefault();
		dispatch(game.actions.setUsername(inputName));
		// setInputName("");
	};

	return (
		<>
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
			{username && (
				<button onClick={() => dispatch(fetchGameData(username))}>Start</button>
			)}
		</>
	);
};
