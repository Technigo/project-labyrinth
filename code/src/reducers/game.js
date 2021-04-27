import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        gameStatus: {}
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setGameStatus: (store, action) => {
            const currentGameStatus = action.payload
            store.gameStatus = currentGameStatus
        },
    }
})

export const registerNewPlayer = (username) => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.setUsername(json))
        })
    }
}

export const continueGame = (direction) => {
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: getState().games.username,
                type: 'move',
                direction 
            })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.setGameStatus(json))
        })
    }
}

export default game