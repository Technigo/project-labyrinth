import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    progress: {},
    username: '',
    history: [],
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('setUsername invoked')
    },
    setProgress: (store, action) => {
      store.progress = action.payload;
      console.log('setProgress invoked')
    },
    setLoader: (store, action) => {
      store.isLoading = action.payload;
      console.log('setLoader invoked')
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoader(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setProgress(data)))
      .finally(() => dispatch(game.actions.setLoader(false)))
  }
}
// export const nextMove = (action) => {
//   return (dispatch, getState) => {
//     fetch('https://labyrinth.technigo.io/action', {
//       method: 'POST',
//       headers: { 'content-type': 'application/JSON' },
//       body: JSON.stringify({
//         username: getState().game.username,
//         type: 'move',
//         direction: action
//       })
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(game.actions.setProgress(data))
//         dispatch(game.actions.setLoader(false))
//       }, 5000)
//   }
// }