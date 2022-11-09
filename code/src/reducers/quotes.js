import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    user: '',
    started: false,
    description: '',
    direction: '',
    type: '',
    coordinates: '',
    loading: true
  },
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload;
    },
    gameStarted: (store, action) => {
      store.started = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setDirection: (store, action) => {
      store.direction = action.payload;
    },
    setType: (store, action) => {
      store.type = action.payload;
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
        // dispatch(game.actions.setDirection(game.direction))
        //   dispatch(game.actions.setType(game.type))
        //   dispatch(game.actions.setCoordinates(game.coordinates))
      // })
      // .finally(() => dispatch(game.actions.isLoading(false)))
      })
  }
}

// export const playerAction = () => {
//   return (dispatch, getState) => {
//     dispatch(game.actions.isLoading(true));
//     fetch('https://labyrinth.technigo.io/action', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: getState().game.user,
//         type: 'move',
//         direction: getState().game.direction
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .then(() => {
//           dispatch(game.actions.setDescription(game.description))
//           dispatch(game.actions.setDirection(game.direction))
//           dispatch(game.actions.setType(game.type))
//           dispatch(game.actions.setCoordinates(game.coordinates))
//           dispatch(game.actions.isLoading(false))
//         })
//     })
//   };
// };