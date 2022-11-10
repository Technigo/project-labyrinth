import { createSlice } from '@reduxjs/toolkit';

// Dont put anything dependant on the api inside here://
export const game = createSlice({
  name: 'game',
  initialState: {
    username: 'Bebbeluring',
    location: '',
    move: []
    // actions: []
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setLocation: (store, action) => {
      store.location = action.payload
      console.log(store.location)
    },
    setMove: (store, action) => {
      store.move = [...store.move, action.payload];
    }
    // restartGame: (store) => {
    //   store.location = ''
    //   store.username = ''
    // }
  }
});

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
})

// First thunk

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        console.log(`Data: ${data}`)
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Second thunk

export const navigateGame = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/jason' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    }
    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

/* export const generateQuote = () => {
// Function with the main purpose to return another function with two functions in it//
  return (dispatch, getState) => {
    fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
      .then((response) => response.json())
      .then((quote) => console.log(quote));
  // ON TRHURSDAY we will be dispatching things here...//
  }
} */
/* export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setItem(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const navigateGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setItem(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
*/
