import { game } from "./game";

const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";

// FETCH FOR START
export const generateAction = (userName) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true)); //loading state is true and loader will show
    fetch(START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.generateNextAction(data));
        dispatch(game.actions.setLoading(false));
      });
  };
};

export const gameDirection = (userName, direction) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true)); //loading state is true and loader will show
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
      .then((data) => {
        dispatch(game.actions.generateNextAction(data));
        dispatch(game.actions.setLoading(false));
      });
  };
};
