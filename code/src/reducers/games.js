import { createSlice } from '@reduxjs/toolkit'

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description: null,
    direction: null,
    moves: null,
    // moves: null,
    history: [],
    // gameStatus: {}
    error: null,
    loading: false
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },
    setDescription: (store, action) => {
      store.description = action.payload
    },
    // setMoves: (store, action) => {
    //   store.moves = action.payload
    // },
    setMoves: (store, action) => {
      if (store.moves) {
        store.history = [...store.history, store.moves]
      }
      store.moves = action.payload
    },
    setPreviousMove: (store, action) => {
      if (store.history.length) {
        store.moves = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    },
    setDirection: (store, action) => {
      store.direction = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    // sethistory: (store, action) => {
    //   store.history = [...store.history, store.direction]
    //   store.game = action.payload;
    // }
  }
})

export const createPlayer = () => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().games.username
        })
      })
      .then(res => {
        if (res.ok) {
          dispatch(games.actions.setError(null))
          return res.json()
        } else {
          console.log(res)
          throw new Error(res.statusText)
        }
      })
      .then((game) => {
        // dispatch(games.actions.setGame(game))
        dispatch(games.actions.setDescription(game.description))
        dispatch(games.actions.setMoves(game.actions))
      })
      .catch(error => dispatch(games.actions.setError(error.message)))
      .finally(() => dispatch(games.actions.setLoading(false)))
  }
}

export const generateQuestion = () => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().games.username,
          type: 'move',
          direction: getState().games.direction
        })
      })
      .then(res => {
        if (res.ok) {
          dispatch(games.actions.setError(null))
          return res.json()
        } else {
          console.log(res)
          throw new Error(res.statusText)
        }
      })
      .then(game => {
        // {dispatch(games.actions.setGame(game))
        dispatch(games.actions.setDescription(game.description))
        dispatch(games.actions.setMoves(game.actions))
      })
      .catch(error => dispatch(games.actions.setError(error.message)))
      .finally(() => dispatch(games.actions.setLoading(false)))
  }
}




/*export const generateQuestion = (direction) => {
  return (dispatch, getState) => {
    if (direction) {
      // fetch(`http://api.quotable.io/random?author=${getState().quotes.author}&tags=${tag}`)
      fetch(`https://wk16-backend.herokuapp.com/start/userName=${getState().games.userName}`)
        .then((res) => res.json())
        .then((game) => dispatch(games.actions.setGame(game)))
  } else {
    fetch(`https://wk16-backend.herokuapp.com/action/userName=${getState().games.userName}`)
      .then((res) => res.json())
      .then((game) => dispatch(games.actions.setGame(game)))
    }
  }
}
*/
export default games
