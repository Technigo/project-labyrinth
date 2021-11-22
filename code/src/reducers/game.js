import { createSlice } from "@reduxjs/toolkit";
import ui from "./ui";


const game = createSlice({

    name: 'name',
    initialState: {
        username: '',
        gameQuestions: [],
        moves: []
    },
    reducers: {
        setUsername: (store, action) => {
            console.log(action)
            store.username = action.payload
        },
        setGame: (store, action) => {
            store.gameQuestions = action.payload
            console.log(action)
        },
        setDirection: (store, action) => {
            console.log(action)
            store.moves = [...store.moves, action.payload]
        }
    }
})


export default game


export const fetchFirstQuestion = (input) => {

    return (dispatch) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: input })
            })
            .then((response) => response.json())
            .then((json) => {
                dispatch(game.actions.setGame(json))
                dispatch(ui.actions.setLoading(false))
            })

    }

}

export const fetchOtherQuestions = (userName, direction) => {
    return (dispatch) => {
        console.log(direction)
        dispatch(ui.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/action',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/JSON' },
                body: JSON.stringify({ username: userName, type: 'move', direction })
            })
            .then(res => res.json())
            .then((json) => {
                dispatch(game.actions.setDirection(direction))
                dispatch(game.actions.setGame(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}