import { useDispatch } from "react-redux";
import { game } from "./game";

export const getStartGame = username => {
  const startGameURL = "https://wk16-backend.herokuapp.com/start";

  return dispatch => {
    fetch(startGameURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    })
      .then(res => res.json())
      .then(gameData =>
        dispatch(game.actions.setCurrentGameState({ gameData }))
      );
  };
};

export const selectNextStep = (username, type, direction) => {
  const nextStepURL = "https://wk16-backend.herokuapp.com/action";

  return dispatch => {
    fetch(nextStepURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction,
      }),
    })
      .then(res => res.json())
      .then(gameData =>
        dispatch(game.actions.setCurrentGameState({ gameData }))
      );
  };
};
