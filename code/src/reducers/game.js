import { createSlice } from '@reduxjs/toolkit'
import ui from './ui'

const game = createSlice({
    name: 'game', 
    initialState: {
        actions: '',
        username: null,
    },
    reducers: {
        setPlayer: (store, action) => {
            store.username = action.payload
        },
        setActions: (store, action) => {
            store.actions = action.payload
        }
    }
})  

export const generatePlayerName = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        const options =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({   
                username: getState().game.username,
            })
        }
        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
            .then((res) => res.json())
            .then((data) => dispatch(game.actions.setActions(data)))
            .finally(dispatch(ui.actions.setLoading(false)))
    }
}


export const generateAction = (type, direction) => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch('https://labyrinth-technigo.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({   
                username: getState().game.username,
                type,
                direction,
            }),
        })
            .then((res) => res.json())
            .then((data) => dispatch(game.actions.setActions(data)))
            .finally(dispatch(ui.actions.setLoading(false)))
    }
}

export default game

