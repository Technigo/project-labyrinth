/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';
import loading from './loading';

const labyrinth = createSlice ({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates:'', 
    description: '',
    actions: []
  },

    reducers: {
      setupStore: (store, action) => {
        store.items = action.payload;
      },
      setUserName: (state, action) => {
        state.username = action.payload
      },
      setCoordinates: (state, action) => {
        state.coordinates = action.payload
      },
      setDescription: (state, action) => {
        state.description = action.payload
      },
      setActionOption: (state, action) => {
        state.actions = action.payload  
    },
  }
});  

export default labyrinth;

// a thunk to handle api call. 
export const getLabyrinth = () => {
  return (dispatch, getState) => {
dispatch(loading.actions.setLoading(true))

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: getState().labyrinth.username })
}

    fetch(`https://labyrinth.technigo.io/start`, options)
      .then((response) => response.json())
      .then((gameData) => {
        console.log(gameData)
        dispatch(labyrinth.actions.setCoordinates(gameData.coordinates))
        dispatch(labyrinth.actions.setDescription(gameData.description))
        dispatch(labyrinth.actions.setActionOption(gameData.actions))
        setTimeout(() => {
          dispatch(loading.actions.setLoading(false));
        }, 2000);
      })
      .catch((error) => {
        console.error('Error fetching labyrinth:', error);
        dispatch(loading.actions.setLoading(false));
      });
  }
}

export const generateOptions = (type, direction) => {
  return (dispatch, getState) => {
   dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    }
    fetch(`https://labyrinth.technigo.io/action`, options)
      .then((respons) => respons.json())
      .then((gameData) => {
        dispatch(labyrinth.actions.setCoordinates(gameData.coordinates))
        dispatch(labyrinth.actions.setDescription(gameData.description))
        dispatch(labyrinth.actions.setActionOption(gameData.actions))
        setTimeout(() => {
          dispatch(loading.actions.setLoading(false));
        }, 2000);
      })
      .catch((error) => {
        console.error('Error fetching labyrinth:', error);
        dispatch(loading.actions.setLoading(false));
      });
  }
}