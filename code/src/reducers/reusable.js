import { game } from "./game";
import { ui } from "./ui";

export const startGameFetch = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.enterGame(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const nextStepFetch = (username, type, direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
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
        dispatch(game.actions.takeNextStep(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
