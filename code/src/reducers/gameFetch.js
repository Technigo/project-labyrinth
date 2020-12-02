// import { gameState } from './gameState';

import { gameState } from "./gameState";

export const startFetch = () => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ username: "TechnigoPlayer1" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(gameState.actions.startGame(data));
      });
  };
};

export const actionFetch = (userName, direction) => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        username: "TechnigoPlayer1",
        type: "move",
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(gameState.actions.commitAction(data));
      });
  };
};
