import { createSlice } from '@reduxjs/toolkit'

const maze = createSlice({
    name: 'maze',
    initialState: {
        username: '',
        description: '',
        moves: null,
        history: [],
        isLoading: false,
        error: null
    } ,
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        }, 
        setMoves: (store, action) => {
            store.moves = action.payload
        },
        setDescription: (store, action) => {
            store.description = action.payload;
        },
        setLoading: (store, action) => {
            store.isLoading = action.payload
        },
        setHistory: (store, action) => {
            store.history = [...store.history, action.payload]
        },
        setError: (store, action) => {
            store.error = action.payload
        }
    }
})

export default maze

export const firstFetch = () => {
    return (dispatch, getState) => {
      fetch("https://wk16-backend.herokuapp.com/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: getState().maze.username }),
      })
        .then((response) => {
            if (response.ok) {
                dispatch(maze.actions.setError(null))
                return response.json()
            } else {
                throw new Error(response.statusText)}
            })
        .then((data) => {
            dispatch(maze.actions.setDescription(data.description))
            dispatch(maze.actions.setMoves(data.actions))
        })
        .catch(error => dispatch(maze.actions.setError(error.message)))
        .finally(() => dispatch(maze.actions.setLoading(false)))
    }
  }


export const secondFetch = (direction) => {
    return (dispatch, getState) => {
        fetch("https://wk16-backend.herokuapp.com/action", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: getState().maze.username,
                type: "move",
                direction: direction
            }),
        })
        .then((response) => {
            if (response.ok) {
                dispatch(maze.actions.setError(null))
                return response.json()
            } else {
                throw new Error(response.statusText)}
            })
        .then((data) => {
            dispatch(maze.actions.setDescription(data.description))
            dispatch(maze.actions.setMoves(data.actions))
        })
        .catch(error => dispatch(maze.actions.setError(error.message)))
        .finally(() => dispatch(maze.actions.setLoading(false)))
    }
}