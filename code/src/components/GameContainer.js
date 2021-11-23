import React from "react";
import { useSelector } from "react-redux";

import { StartGame } from "./StartGame";
import { NextStep } from "./NextStep";
import { TheEndGame } from "./TheEndGame";
import { LoadingIndicator } from "./LoadingIndicator";

export const GameContainer = () => {
  const gameStatus = useSelector((store) => store.gamestate.gameStatus);
  const loader = useSelector((store) => store.gamestate.isLoading);

  return (
    <>
      {loader && <LoadingIndicator/> }
      {!loader &&
        <div>
          {!gameStatus.coordinates && <StartGame />}
          {gameStatus.coordinates && gameStatus.coordinates !== "1,3" && (
            <NextStep /> 
          )}
          {gameStatus.coordinates === "1,3" && (
          <>
            <TheEndGame description = {gameStatus.description} />
						<p>{gameStatus.description}</p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </> )}
        </div>
      }
    </>
  );
};

  