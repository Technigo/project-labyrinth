import { gameState } from "./gameState";

export const startFetch = (userName) => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ username: userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameState.actions.commitAction(data));
      });
  };
};

export const actionFetch = (userName, direction) => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
        dispatch(gameState.actions.commitAction(data));
        dispatch(gameState.actions.setLoader(false));
      }, 2000);
    });
  };
};
