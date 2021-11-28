import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  previousCoordinates: [""], // this can be used to implement a go back functionality
  loading: false,
  currentPosition: undefined,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
    setPreviousCoordinates: (store, action) => {
      // Here you need to continue to work on implementing the "go back" logic
      // what should happen with the array when a user goes back a step?
      if (store.currentPosition) {
        store.previousCoordinates = [
          ...store.previousCoordinates,
          action.payload,
        ];
      }
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    restart: () => {
      return initialState;
    },
  },
});

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
      // We're using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data));
        dispatch(game.actions.setPreviousCoordinates(data));
      })
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};
