import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice ({
    name: 'game',
    initialState: {},
    history: [],

reducers: {
    saveGame: (state, action) => {
        state.history = [...state.history, state.quote]
        state.quote = action.payload
    }
}

})

export const createPlayer = () => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": "TechnigoPlayer" })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.saveGame(json))
            console.log(json)
        })
    }
}

