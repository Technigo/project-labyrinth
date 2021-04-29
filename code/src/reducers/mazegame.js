import { createSlice } from '@reduxjs/toolkit'


export const mazegame = createSlice({
    name: 'mazegame',
    initialState: {
      userName: null,
      gameStatus: null, 
      loading: false,
      history: [],
      restart: false
    },
    reducers: {
      setUserName: (store, action) => {
        store.userName = action.payload
    },
      setGameStatus: (store, action) => {
        if (store.gameStatus) {
          store.history = [...store.history, store.gameStatus]
        }
        store.gameStatus = action.payload
      }, 
      setLoading: (store, action) => {
        store.loading = action.payload 
      },
      setPreviousMove: (store) => {
        if (store.history.length) {
          store.gameStatus = store.history[store.history.length - 1]
          store.history = store.history.slice(0, store.history.length - 1)
        }
      },
      setRestartGame: (store, action) => {
        store.restart = action.payload 
      }
    }

})

export const generateGame = (userName) => {
    return (dispatch) => {
      dispatch(mazegame.actions.setLoading(true))
      fetch('https://wk16-backend.herokuapp.com/start', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName }),
      })
        .then(response => response.json())
        .then(json => {
          dispatch(mazegame.actions.setGameStatus(json))
        })
        .finally(() => dispatch(mazegame.actions.setLoading(false)))
    }
}
export const generateNextMove = (userName, direction) => {
  return (dispatch) => {
    dispatch(mazegame.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, type: "move", direction: direction }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(mazegame.actions.setGameStatus(json));
      })
   .finally(() => dispatch(mazegame.actions.setLoading(false)))
  }
}

