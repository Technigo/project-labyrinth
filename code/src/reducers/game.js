import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./ui";

const initialState = {
  userName: "",
  gameObject: {
    coordinates: "",
    description: "",
    actions: [],
  },
  history: [],
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameObject: (state, action) => {
      state.gameObject.description && state.history.push(state.gameObject);
      state.gameObject = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setPreviousGameObject: (state) => {
      if (state.history.length) {
        state.gameObject = state.history[state.history.length - 1];
        state.history.splice(state.history.length - 1, 1);
      }
    },
    reset: () => initialState,
  },
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    };
    dispatch(setLoading(true));
    fetch("https://labyrinth-technigo.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGameObject(data));
        dispatch(setLoading(false));
      });
  };
};

export const fetchGameSteps = ({ direction }) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: "move",
        direction: direction,
      }),
    };

    dispatch(setLoading(true));
    fetch("https://labyrinth-technigo.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGameObject(data));
        dispatch(setLoading(false));
      });
  };
};

export default game;

export const { setPreviousGameObject, reset } = game.actions;
