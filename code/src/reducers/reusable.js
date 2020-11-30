import { game } from "./game";

const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";

// FETCH FOR START
export const GenerateAction = (userName) => {
  return (dispatch) => {
    fetch(START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.generateNextAction(data)));
  };
};

export const gameDirection = (userName, direction) => {
  return (dispatch) => {
    fetch(ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.generateNextAction(data)));
  };
};
