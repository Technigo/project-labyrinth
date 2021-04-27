import { createSlice } from '@reduxjs/toolkit'

const maze = createSlice({
    name: 'maze',
    initialState: {
        username: '',
        description: '',
        actions: [],
        history: [],
        isLoading: false
    } ,
    reducers: {
       startGame: (store, action) => {
        store.username = action.payload;
        
       }, 
       startMaze: (store, action) => {
           store.description = action.payload
           store.actions = action.payload.actions;
       },
       setLoading: (store, action) => {
           store.isLoading = action.payload
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
        .then((response) => response.json())
        .then((data) => {
            dispatch(maze.actions.startMaze(data))
            dispatch(maze.actions.setLoading(false))
        });
    };
  };
