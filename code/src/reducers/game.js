import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
    name: 'game',
    initialState: {
        username: null,
        currentStep: {},
        isLoading: false
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setCurrentStep: (store, action) => {
            store.currentStep = action.payload
        },
        setLoading: (store, action) => {
            store.isLoading = action.payload
        },
        restart: (store) => {
            store.username = null 
            store.currentStep = {}
        }
    }
})

export const generateGame = () => {
    return (dispatch, getState) => {
        dispatch(game.actions.setLoading(true))
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: getState().game.username
            })
        }

        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                dispatch(game.actions.setCurrentStep(data))
                dispatch(game.actions.setLoading(false))
            }, 500)
        })
    }
}

export const continueGame = (direction) => {
    return (dispatch, getState) => {
        dispatch(game.actions.setLoading(true))
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: getState().game.username,
                type: "move",
                direction: direction
            })
        }

        fetch('https://labyrinth-technigo.herokuapp.com/action', options)
            .then(res => res.json())
            .then(data => {
                dispatch(game.actions.setCurrentStep(data))
                dispatch(game.actions.setLoading(false))
            }
            )
    }
}

export default game