import React from "react";
import { useSelector } from "react-redux";

import { StartPage } from "../components/StartPage";
import { GamePlay } from "../components/GamePlay";

export const GameContainer = () => {
	const isGameStarted = useSelector((state) => state.game.isGameStarted);

	return (
		<>
			{!isGameStarted && <StartPage />}
			{isGameStarted && <GamePlay />}
		</>
	);
};
