import { createSlice } from '@reduxjs/toolkit'


export const games  = createSlice({
    name: 'games',
    initialState: {
        // coordinates: null,
        // description: null,
        // actions:[],
        username: '',
        gameStatus: {
            description: "",
            actions: []
        }
    },
    reducers: {
        setUserName: (store, action) => {
            store.username = action.payload
        },
        setGameStatus: (store, action) => {
            const currentGameStatus = action.payload
            store.gameStatus = currentGameStatus
        },

    }
})

export const createNewPlayer = (username) => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username
            }),
        })
        .then(res => res.json())
        .then(data => dispatch(games.actions.setGameStatus(data)))
    }
}

export const CarryOnGame = (direction) => {
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: getState().games.username,
                type: 'move',
                direction: direction
            }),
        })
        .then(res => res.json())
        .then(data => dispatch(games.actions.setGameStatus(data)))
    }
}

// export default games