// -- reducer
import { game } from "./game";
import { ui } from "./ui";

export const fetchGame = () => {
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true));

    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      body: JSON.stringify({ username: getStore().game.username }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGame(data));

        dispatch(ui.actions.setLoading(false));
      });
  };
};

//function that returns another function aka THUNKy
//why not curlies around the direction?
export const fetchNextMove = (direction) => {
  //together with dispatch send also getStore function to get
  //our current username value from the Redux store
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      body: JSON.stringify({
        username: getStore().game.username,
        type: "move",
        direction: direction,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGame(data));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
