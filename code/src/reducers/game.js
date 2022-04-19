import { createSlice } from "@reduxjs/toolkit"

export const game = createSlice({
    name:"game",
    initialState:{
        username: null,
        currentPosition: null,
        history: [],
        loading: false,
    },

    reducers: {
        setUsername: (store, action) => {
          store.username = action.payload
        },
        setCurrentPosition: (store, action) => {
          store.currentPosition = action.payload
        },
        setHistory: (store, action) => {

          if (store.currentPosition) {
            store.history = [...store.history, action.payload]
          }
        },
        setLoading: (store, action) => {
            store.loading = action.payload
          },
        },
})

export const startGame = () => {
    return(dispatch, getState) => {
        dispatch(game.actions.setLoading(true))
        fetch(`https://labyrinth-technigo.herokuapp.com/start`,
        {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ username: getState().game.username }),
          })
          .then(res => res.json())
          .then(data => dispatch(game.actions.setCurrentPosition(data)))
          .finally(() => dispatch(game.actions.setLoading(false)))
    }
}

export const nextStep = (type, direction) => {
    return(dispatch, getState) => {
        dispatch(game.actions.setLoading(true))
        fetch(`https://labyrinth-technigo.herokuapp.com/action`,
        {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ username: getState().game.username, type, direction }),
          })
          .then(res => res.json())
          .then(data => {
            dispatch(game.actions.setCurrentPosition(data))
            dispatch(game.actions.setHistory(data))
        console.log(data)})
          .finally(() => dispatch(game.actions.setLoading(false)))
    }
}
