import { createSlice } from '@reduxjs/toolkit';
// import loading from './loading';

// const initialState = {
//   username: '',
//   //   description: '',
//   //   direction: '',
//   position: '',
//   loading: false // should it be placed here?
// //   actions: []
// }

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    position: '',
    loading: false
  },
  reducers: {
    // an action to save the joke to global state
    setUsername: (store, action) => {
      store.username = action.payload;
    //   state.username = action.payload
    //   store.username = `${action.payload} ${Date.now().toString()}`;
    },
    // an action to save the category to global state
    // setDescription: (state, action) => {
    //   state.description = action.payload
    // },
    // setDirection: (state, action) => {
    //   state.direction = action.payload
    // },
    // an action to save the current loading state to global state
    // setLoading: (state, action) => {
    //   state.loading = action.payload
    // },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    // setActionOption: (state, action) => {
    //   state.actions = action.payload
    // }
    // setPosition: (state, action) => {
    //   state.position = action.payload
    // }
    setPosition: (store, action) => {
      store.position = action.payload;
    }
  }
});

// a thunk to handle api call
// https://labyrinth.technigo.io/start
// https://labyrinth.technigo.io/action
// start game
export const startGame = () => {
  return (dispatch, getState) => {
    // set loading to true
    // dispatch(loading.actions.setLoading(true))
    dispatch(game.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username
      })
    };
    // what replaces jokes.category?
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      // below, json = data
      .then((json) => {
        console.log(json)
        // get the data from the api - save it as the joke in global state
        // set loading to false
        dispatch(game.actions.setPosition(json))
          .catch((error) => console.error(error))
          .finally(() => dispatch(game.actions.setLoading(false)))
        //   .finally(() => dispatch(loading.actions.setLoading(false)))
        // dispatch(game.actions.setDirection(json.direction))
        // dispatch(game.actions.setAction(json.action))
        // dispatch(game.actions.setLoading(false))
      })
  }
}
// export const actionsGame = (type, direction) => {

export const actionsGame = (direction) => {
  return (dispatch, getState) => {
    // dispatch(loading.actions.setLoading(true))
    dispatch(game.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().loading.username,
        type: 'move',
        direction
      })
    }
    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        // dispatch(loading.actions.setPosition(json))
        dispatch(game.actions.setPosition(json))
        // dispatch(game.actions.setDescription(json.description))
        // dispatch(game.actions.setDirection(json.direction))
        // dispatch(game.actions.setAction(json.action))
        // dispatch(game.actions.setLoading(false))
      })
      .catch((error) => console.error(error))
    //   .finally(() => dispatch(loading.actions.setLoading(false)))
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export default game