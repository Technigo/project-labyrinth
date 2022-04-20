import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game', 
    initialState: {
        username: null,
        // type: null,
        // direction: null
        // description: null
    },
    reducers: {
        setPlayer: (store, action) => {
            // store.player = action.payload
            store.username = action.payload
        },
        // setDescription: (store, action) => {
        //     store.description = action.payload
        // }
        setAction: (store, action) => {
            // store.type = action.payload
            store.direction = action.payload
        }
    }
})  

export const generatePlayerName = () => {
    return (dispatch, getState) => {
        const options =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({   
                username: getState().game.username
            })
        }

        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
            .then((res) => res.json())
            // .then(player => dispatch(game.actions.setPlayer(player)))
            .then(username => dispatch(game.actions.setPlayer(username)))
    }
}

export const generateAction = ( { type, direction } ) => {
    return (dispatch, getState) => {
        const options =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({   
                username: getState().game.username,
                type: type,
                direction: direction
            })
        }

        fetch('https://labyrinth-technigo.herokuapp.com/action', options)
            .then((res) => res.json())
            .then((direction) => dispatch(game.actions.setAction(direction)))
    }
}

export default game

