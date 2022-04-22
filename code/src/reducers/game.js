import { createSlice } from "@reduxjs/toolkit";
import ui from "./ui";


const initialState = {
    username: null,
    position: null,
    history: [],
}

const game = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {

        setUsername: (store, action) => {
            store.username = action.payload
        },

        setPosition: (store, action) => {
            if (store.position) {
                store.history.push(store.position)
            }
            store.position = action.payload
        },

        setPreviousPosition: (store, action) => {
            if (store.position.length) {
                store.position = store.history[store.history.length -1]
            }

            store.history.splice(store.history.length -1, 1)
        },

        restartGame: () => {
            return initialState
        }
    }
})


export const fetchData = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://labyrinth-technigo.herokuapp.com/start', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: getState().game.username
                        })
                    })
            .then(res => res.json())
            .then((data) => {
                dispatch(game.actions.setPosition(data))
                dispatch(ui.actions.setLoading(false))
            })
    }
}


export const fetchMoreData = ({move = "move", direction}) => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://labyrinth-technigo.herokuapp.com/action', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: getState().game.username,
                        type: move,
                        direction: direction,
                        })
                    })
            .then(res => res.json())
            .then(data => {
                dispatch(game.actions.setPosition(data))
                dispatch(ui.actions.setLoading(false))
            })
    }
}


export default game