import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    user: '',
    started: false,
    description: '',
    coordinates: '',
    loading: true,
    history: [],
    actions: []
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
    // going back in history. delete 1 in history.
    setPrevious: (store, action) => {
      const historyArraylength = store.history.length;
      store.quote = store.history[historyArraylength - 1]
      store.history.splice(historyArraylength - 1, 1)
      console.log(action)
    },
    setGameActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.type = action.payload;
    },
    isLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

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
        // dispatch(game.actions.setGameActions(game.actions))
        // dispatch(game.actions.setCoordinates(game.coordinates))
      // })
      // .finally(() => dispatch(game.actions.isLoading(false)))
      })
  }
}

export const playerAction = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(true))
    const play = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.user,
        type: 'move',
        direction: getState().game.direction
      })
    };
    fetch('https://labyrinth.technigo.io/action', play)
      .then((response) => response.json())
      .then(() => {
        dispatch(game.actions.setDescription(game.direction));
        dispatch(game.actions.setGameActions(game.actions))
        dispatch(game.actions.setCoordinates(game.coordinates))
      //   dispatch(game.actions.setDescription(game.description))
      //   dispatch(game.actions.setDirection(game.direction))
      //   dispatch(game.actions.setType(game.type))
      //   dispatch(game.actions.setCoordinates(game.coordinates))
      //   dispatch(game.actions.isLoading(false))
      })
  }
}