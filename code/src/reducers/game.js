import { createSlice } from "@reduxjs/toolkit"


export const game = createSlice({
    name: "game",
    initialState: {
        userName: 0,
        gameState: {},
        gameStarted: false,
        isLoading: false,
        },
})

export const fetchGame = () => {
    return (dispatch, getState) => {
      
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: getState().game.username }),
      };
  
      fetch('https://labyrinth-technigo.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((data) => {
          dispatch(game.actions.setGameObject(data));
          console.log(data)
         
        });
    };
  };

export default game