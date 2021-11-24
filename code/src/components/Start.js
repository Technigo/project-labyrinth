import React from "react";
import { useDispatch } from "react-redux";
import { game } from "../reducers/game";
import { startGame } from "../reducers/game";

export const Start = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(startGame());
  };

  return (
    <>
      <h1>Want to enter the labyrinth!?</h1>

      {/* Remember to use a form tag and the onSubmit event to handle enter clicks AND button clicks in one go */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" required onChange={handleInputChange} />
        </label>
        <button className="startGameButton" type="submit">
          Start game!
        </button>
      </form>
    </>
  );
};
