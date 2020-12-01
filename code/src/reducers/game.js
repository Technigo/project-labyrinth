import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    game: {}, 
    history: [],
    username: {}
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
            body: JSON.stringify({ "username": 'Ingela Löfgren' })
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.saveGame(json))
        })
    }
}

