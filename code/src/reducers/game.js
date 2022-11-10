import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    user: '',
    started: false,
    description: '',
    step: []
    // coordinates: '',
    // loading: true,
    // history: []
  },
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload;
    },
    gameStarted: (store, action) => {
      store.started = action.payload;
    },
    setDescription: (store, action) => {
      // if (store.quote !== '') {
      //   store.history.push(store.description);
      // }
      store.description = action.payload;
    },
    setStep: (store, action) => {
      store.step = [...store.moves, action.payload]
    }
    // going back in history. delete 1 in history.
    // setPrevious: (store, action) => {
    //   const historyArraylength = store.history.length;
    //   store.quote = store.history[historyArraylength - 1]
    //   store.history.splice(historyArraylength - 1, 1)
    //   console.log(action)
    // },
    // setCoordinates: (store, action) => {
    //   store.type = action.payload;
    // },
    // isLoading: (store, action) => {
    //   store.loading = action.payload;
    // }
  }
});

export default game;

export const startGame = () => {
  return (dispatch, getState) => {
    const start = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user })
    };
    fetch('https://labyrinth.technigo.io/start', start)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        dispatch(game.actions.gameStarted(true))
      })
  }
}

export const nextStep = (direction) => {
  return (dispatch, getState) => {
    const action = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user,
        type: 'move',
        direction })
    };
    fetch('https://labyrinth.technigo.io/action', action)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data));
        // dispatch(game.actions.setGameActions(game.actions))
        // dispatch(game.actions.setCoordinates(game.coordinates))
      })
  }
}