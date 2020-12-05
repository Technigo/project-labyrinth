// import { useSelector } from "react-redux"

// -- reducer
import { game } from "./game";
import { ui } from "./ui";

//make username value come from an input??
// const userName = useSelector(store => store.game.username)
const userName = "lalallaladlawdfw";

//need to pass in the userName/value? to those two fetches somehow ...

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      body: JSON.stringify({ username: userName }),
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
  //together with dispatch send also getState function to get
  //the our current Redux state
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
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
