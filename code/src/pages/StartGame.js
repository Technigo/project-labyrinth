import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { startGame } from "../reducers/game";
import { LoadingIndicator } from "components/LoadingIndicator";
import { CompassAnimation } from "components/CompassAnimation";

const StartGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.game.userName);
  const loading = useSelector((state) => state.ui.loading);

  const handleStartGame = () => {
    dispatch(startGame());
    navigate("/game");
  };

  return (
    <div>
      {loading ? <LoadingIndicator /> : <CompassAnimation width= '300px' height= '300px'/>}
      <p>Hello {name}, Welcome To the labyrinth! Search your way to the light</p>
      <p>To move from a place to another. Click the button with "east", "west", "south" or "north"</p>
      <p>To examine where you are read the the descriptions.</p>
      <p>Enjoy this little adventure and explore the labyrinth. Good Luck {name} !</p>
      <p>Click this button to start the game</p>
      <button type="submit" onClick={() => handleStartGame()}>
        Click
      </button>
    </div>
  );
};

export default StartGame;
