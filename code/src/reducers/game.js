import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    userName: null,
    currentPosition: [],
    loading: false,
    backgroundPath: "../images/maze.jpeg",
  },
  reducers: {
    addToStore: (store, action) => {
      store.currentPosition = action.payload;
    },
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    changeBackground: (store, action) => {
      store.backgroundPath = action.payload;
    },
  },
});

export const startTheGame = (username) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.addToStore(json));
        dispatch(game.actions.setUserName(username));
      })
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};

export const continueTheGame = (moveTo) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.userName,
        type: "move",
        direction: moveTo,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.addToStore(json));
      })
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};
