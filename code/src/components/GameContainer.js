import React from "react";
import { useSelector } from "react-redux";

import { StartGame } from "./StartGame";
import { NextStep } from "./NextStep";
import { TheEndGame } from "./TheEndGame";
import { LoadingIndicator } from "./LoadingIndicator";

export const GameContainer = () => {
  const gameStatus = useSelector((store) => store.gamestate.gameStatus);
  const loader = useSelector((store) => store.gamestate.isLoading);

//stackoverflow: https://stackoverflow.com/questions/48224862/how-to-create-loader-spin-for-react-redux/48225371

  return (
    <>
      {loader ? <LoadingIndicator/> : 
        <div>
          {!gameStatus.coordinates && <StartGame />}
          {gameStatus.coordinates && gameStatus.coordinates !== "1,3" && (
            <NextStep /> 
          )}
          {gameStatus.coordinates === "1,3" && (
          <>
            <TheEndGame/>
          </> )}
        </div>
      }     
    </>
  );
};

  