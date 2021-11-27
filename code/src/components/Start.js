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
      <section className="first-page">
        <h1>Want to enter the labyrinth!?</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Add your username
            <input type="text" required onChange={handleInputChange} />
          </label>
          <button type="submit">Lets go</button>
        </form>
      </section>
    </>
  );
};
