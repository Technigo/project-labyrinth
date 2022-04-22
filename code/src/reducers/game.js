import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui";

export const game = createSlice({
    name: 'game',
    initialState: {
      username: '',
       gameObject: {
         coordinates: '',
         description: '',
         actions: [],
        },     
      history:[]
    },
    reducers: {
      setGameObject: (state, action) => {
        if(state.gameObject) {
          state.history.push(state.gameObject)
        }
        state.gameObject = action.payload;
      },

      setUserName: (state, action) => {
        state.username = action.payload;
      },
    },
  });


  export const fetchGame = () => {
    return (dispatch, getState) => {
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: getState().game.username }),
      };
      dispatch(ui.actions.setLoading(true))
      fetch('https://labyrinth-technigo.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((data) => {
          dispatch(game.actions.setGameObject(data));
          console.log(data)
          setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000)
        });
         
    };
  };

  export const fetchGameSteps = ({ direction }) => {
    return (dispatch, getState) => {
      dispatch(ui.actions.setLoading(true))
      
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
          setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000) 
        });
    };
  };
  
  
  export default game