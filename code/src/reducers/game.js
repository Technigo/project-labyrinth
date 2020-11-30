import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice ({
    name: 'game',
    initialState: {}, 

reducers: {
    startGame: (state, action) => {
        
    }
}

})


export const createPlayer = () => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start')
        .then((res) => res.json())
        .then((json) => {
            dispatch(game.actions.createPlayer)
        })
    }
}