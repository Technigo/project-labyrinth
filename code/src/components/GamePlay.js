import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";

import { nextStep } from "../reducers/game";

export const GamePlay = () => {
	const dispatch = useDispatch();
	const currentPosition = useSelector((state) => state.game.currentPosition);
	const loading = useSelector((state) => state.ui.loading);

	return (
		<>
			{currentPosition && (
				<>
					{loading && <Loader />}
					<div>{currentPosition.coordinates}</div>
					<div>{currentPosition.description}</div>
					<button onClick={() => dispatch(nextStep("North"))}>North</button>
					<button onClick={() => dispatch(nextStep("East"))}>East</button>
					<button onClick={() => dispatch(nextStep("South"))}>South</button>
					<button onClick={() => dispatch(nextStep("West"))}>West</button>
				</>
			)}
		</>
	);
};
