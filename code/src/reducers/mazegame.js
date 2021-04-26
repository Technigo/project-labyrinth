import { createSlice } from '@reduxjs/toolkit'


export const mazegame = createSlice({
    name: 'mazegame',
    initialState: {
      userName: null,
      gameStatus: {}
    },
    reducers: {
      setUserName: (store, action) => {
        store.userName = action.payload
    },
      setGameStatus: (store, action) => {
        store.gameStatus = action.payload
      }
    }

  })

  export const generateGame = (userName) => {
    return (dispatch) => {
      fetch('https://wk16-backend.herokuapp.com/start', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName }),
      })
        .then(response => response.json())
        .then(json => {
          dispatch(mazegame.actions.setGameStatus(json));
        })
    }
}

