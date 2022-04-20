import React, { useState } from "react";
import { useDispatch } from "react-redux";

import game, { generateGame } from "reducers/game";

import GameScreen from "./GameScreen";

const StartScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [step, setStep]  = useState(0);

  const dispatch = useDispatch();

  const onUsernameSelect = () => {
    dispatch(game.actions.setUsername(inputValue));
    dispatch(generateGame())
    setStep(state => state +1)
  }
 if (step === 0) {
  return (
    <div>
      <p>Welcome to the labyrinth!</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onUsernameSelect} >Start game!</button>
    </div>
  );
 } else if (step === 1) {
   return (
    <GameScreen />
   )
 }

};

export default StartScreen;
