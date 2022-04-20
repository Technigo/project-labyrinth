import { createSlice } from "@reduxjs/toolkit"

const game = createSlice({
    name: "game",
    initialState: {
      username: null,
      gameObject: {
        coordinates: '',
        description: '',
        actions: [],
      },
      reducers: {
        setGameObject: (state, action) => {
          state.gameObject = action.payload
        },
        setUserName: (state, action) => {
          state.username = action.payload
        }
      }
      //isLoading: false,
    },
})

export const fetchGame = () => {

    return (dispatch, getState) => {

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: getState().game.username})
      }
      
      fetch('https://labyrinth-technigo.herokuapp.com/start', options) 
        .then(res => res.json())
        .then(data => {
          dispatch(game.actions.setGameObject(data))
          console.log(data)
        })
      
    }}

    export const fetchGameSteps = ({ direction }) => {
    return (dispatch, getState) => {
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: getState().game.username,
          type: 'move',
          direction: direction,
        })
      };
  
      fetch('https://labyrinth-technigo.herokuapp.com/action', options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          dispatch(game.actions.setGameObject(data));
        });
    };
  };

  export default game