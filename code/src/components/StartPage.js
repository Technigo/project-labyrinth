import React from "react";
import { useDispatch } from "react-redux";
import game from "../reducers/game";
import { fetchGame } from "../reducers/game";

//Start page where the user will input their username

const StartPage = () => {
  const dispatch = useDispatch();

  // A function that stores the users input name on submit and dispatches it to the store
  const handleInputChange = (event) => {
    dispatch(game.actions.setUserName(event.target.value));
  };

  // A function that prevents the automatic submit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchGame());
  };

  return (
    <form>
      <label>
        <h1> Type your username! </h1>
        <input type="text" required onChange={handleInputChange} />
      </label>
      <button type="submit"> Send </button>
    </form>
  );
};

export default StartPage;
