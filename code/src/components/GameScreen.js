import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {generateGame} from "reducers/game";

import StartScreen from "./StartScreen";

const GameScreen = () => {
  const gameStep = useSelector((store)=> store.game.currentStep);
  console.log(gameStep)

  return(
    <div>
    
      <p>this is the current step :{gameStep.description}</p>
      <p>Coordinates :{gameStep.coordinates}</p>

      {gameStep.actions.map((step) => {
        return(
          <div>
        <p>{step.description}</p>
        <button>{step.direction}</button>
        </div>
        )
      })}
    </div>
  )
}
export default GameScreen;
