import React from "react";
import { useSelector } from 'react-redux'

export const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData)
  console.log(gameData)


  if (gameData) {
    return (
      <>
        <p>{gameData.coordinates}</p>
        <p>{gameData.description}</p>
      </>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
};

// export default GameScreen;
