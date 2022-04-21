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
          dispatch(ui.actions.setLoading(false))
        });
         
    };
  };

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
      
      dispatch(ui.actions.setLoading(true))
      fetch('https://labyrinth-technigo.herokuapp.com/action', options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          dispatch(game.actions.setGameObject(data));
          dispatch(ui.actions.setLoading(false))
        });
    };
  };
  
  
  export default game