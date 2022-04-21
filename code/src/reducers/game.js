import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
    name: "game",
    initialState: {
        username: null,
        position: null,
        history: [],
    },
    reducers: {

        setUsername: (store, action) => {
            store.username = action.payload
        },

        setPosition: (store, action) => {
            if (store.position) {
                store.position.push(store.position)
            }
            store.position = action.payload
        },

        setPreviousPosition: (store, action) => {
            if (store.position.length) {
                store.position = store.history[store.history.length -1]
            }

            store.history.splice(store.history.length -1, 1)
        }
    }
})


export const fetchData = () => {
    return (dispatch, getState) => {
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
                console.log(data)
            })
    }
}


export const fetchMoreData = ({move = "move", direction}) => {
    return (dispatch, getState) => {
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
            .then(data => console.log(data))
    }
}


export default game