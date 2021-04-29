import { createSlice } from "@reduxjs/toolkit";

const gameFetch = createSlice({
  name: "gameFetch",
  initialState: {
    userName: null,
    // gameScreen: null,
    description: "",
    actions: [],
    loading: false,
    coordinates: "",
  },
  reducers: {
    setName: (store, action) => {
      store.userName = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});

export const firstFetch = (userName) => {
  return (dispatch, getState) => {
    dispatch(gameFetch.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(gameFetch.actions.setDescription(data.description));
        dispatch(gameFetch.actions.setActions(data.actions));
        dispatch(gameFetch.actions.setLoading(false));
      });
  };
};

export const secondFetch = (userName, direction) => {
  return (dispatch) => {
    dispatch(gameFetch.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //dispatch(gameFetch.actions.setGameScreen(data));
        dispatch(gameFetch.actions.setDescription(data.description));
        dispatch(gameFetch.actions.setActions(data.actions));
        dispatch(gameFetch.actions.setCoordinates(data.coordinates));
        dispatch(gameFetch.actions.setLoading(false));
      });
  };
};

export default gameFetch;
