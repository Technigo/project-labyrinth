import { createSlice } from '@reduxjs/toolkit'
import ui from './ui'

const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        gameStatus: {},
        history: [],
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setGameStatus: (store, action) => {
            if (store.gameStatus) {
                store.history = [...store.history, store.gameStatus]
            }
            const currentGameStatus = action.payload
            store.gameStatus = currentGameStatus
        },
        setPreviousDescription: (store, action) => {
            if (store.history.length) {
                store.gameStatus = store.history[store.history.length - 1]
                store.history = store.history.slice(0, store.history.length - 1)
            }
        }
    }
})

export const registerNewPlayer = (username) => {
    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.setGameStatus(json))
        })
        .finally(() => dispatch(ui.actions.setLoading(false)))
    }
}

export const continueGame = (direction) => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: getState().game.username,
                type: 'move',
                direction: direction 
            })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.setGameStatus(json))
        })
        .finally(() => dispatch(ui.actions.setLoading(false)))
    }
}

export default game