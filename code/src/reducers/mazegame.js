import { createSlice } from '@reduxjs/toolkit'


export const mazegame = createSlice({
    name: 'mazegame',
    initialState: {
      userName: null,
      gameStatus: undefined, 
      loading: false
    },
    reducers: {
      setUserName: (store, action) => {
        store.userName = action.payload
    },
      setGameStatus: (store, action) => {
        store.gameStatus = action.payload
      }, 
      setLoading: (store, action) => {
        store.loading = action.payload 
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

