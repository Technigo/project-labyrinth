import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    progress: {},
    history: [],
    // need this to store how people have moved in the labyrinth so they can go back steps
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setProgress: (store, action) => {
      store.progress = action.payload
    },
    setLoader: (store, action) => {
      store.isLoading = action.payload
    }
  }
});

// a thunk to handle the API request
// two API requests one for the startLabyrinth and one for all the rest
export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoader(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  };
}

export const labyrinthProgress = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoader(true))
    const optionsProgress = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinthla.username, type, direction })
    };

    fetch('https://labyrinth.technigo.io/action', optionsProgress)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
        dispatch(labyrinth.actions.setDirection(json.actions.direction))
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  };
}