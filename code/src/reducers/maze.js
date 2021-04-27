import { createSlice } from '@reduxjs/toolkit'

const maze = createSlice({
    name: 'maze',
    initialState: {
        username: '',
        description: '',
        actions: [],
        history: []
    } ,
    reducers: {
       startGame: (store, action) => {
        store.username = action.payload;

        
       }, 
       startMaze: (store, action) => {
           store.description = action.payload
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
          console.log(data);
        });
    };
  };
    
