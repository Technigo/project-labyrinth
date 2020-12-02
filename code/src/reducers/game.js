import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    game: {}, 
    history: [],
    username: "",

}

export const game = createSlice ({
    name: 'game', initialState,
    
    reducers: {
    saveGame: (state, action) => {
        state.history = [...state.history, state.game]
        state.game = action.payload
    },

    addUserName: (state, action) => {
        state.username = action.payload
    },

    nextStep: (state, action) => {
        state.username = action.payload
    }
}
})

export const createPlayer = (username) => {
    return (dispatch, getState) => {
        const state = getState()
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": `${username}` })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.saveGame(json))
        })
    }
}

export const continueGame = (step, username) => {
    return (dispatch, getState) => {
        const state = getState()
        console.log(state)
        console.log(step)
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  
                username: `${username}`, 
                type: "move", 
                direction: `${step}` })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.saveGame(json))
        })
    }
}

