import { game } from "./game";

export const startGameFetch = (username) => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        dispatch(game.actions.enterGame(json));
      });
  };
};

export const nextStepFetch = (username, type, direction) => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        dispatch(game.actions.takeNextStep(json));
      });
  };
};
