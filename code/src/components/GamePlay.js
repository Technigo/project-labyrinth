import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { game, fetchActions } from "../reducers/game";

export const GamePlay = () => {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.data);
	return (
		<>
			<div>{gameStatus.coordinates}</div>
			<div>{gameStatus.description}</div>
			<button onClick={() => dispatch(fetchActions("North"))}>North</button>
			<button onClick={() => dispatch(fetchActions("East"))}>East</button>
			<button onClick={() => dispatch(fetchActions("South"))}>South</button>
			<button onClick={() => dispatch(fetchActions("West"))}>West</button>
		</>
	);
};
