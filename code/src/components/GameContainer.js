import React from "react";
import { useSelector } from "react-redux";

import { StartGame } from "./StartGame";
import { NextStep } from "./NextStep";
import { TheEndGame } from "./TheEndGame";
import { LoadingIndicator } from "./LoadingIndicator";

export const GameContainer = () => {
  const gameStatus = useSelector((state) => state.gamestate.gameStatus);
  const loader = useSelector((state) => state.gamestate.isLoading);

//stackoverflow: https://stackoverflow.com/questions/48224862/how-to-create-loader-spin-for-react-redux/48225371

  return (
    <>
			{/* if loader true return loadingindicatior, otherwise return code below */}
      {loader ? <LoadingIndicator/> : 
        <div>
					{/* if not gamecoordinates return start game */}
          {!gameStatus.coordinates && <StartGame />}
					{/* if coordinates true and not the last page of the game return Nextstep*/}
          {gameStatus.coordinates && gameStatus.coordinates !== "1,3" && (
            <NextStep /> 
          )}
					{/* if coordinates 1.3(last page) return the end */}
          {gameStatus.coordinates === "1,3" && (
          <>
            <TheEndGame/>
          </> )}
        </div>
      }     
    </>
  );
};

  