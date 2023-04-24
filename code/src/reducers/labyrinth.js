import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: '',
    actions: []
  },
  // Here we add functions that set the state, i.e. the username.
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
      state.coordinates = '';
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
    // restarting, we set coordinates to '' to get to the start page
    // maybe fix later so it resets the whole state?
    restart: (state) => {
      state.coordinates = '';
      console.log('state.coordinates for restart:', state.coordinates)
    }
  }
})

export const generateLabyrinthData = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        console.log('data.coordinates:', data.coordinates)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setActionOption(data.actions));
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 3000);
      })
  }
}

// The API request for when the suer is selecting an action
export const generateActionData = (type, direction) => {
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
    fetch('https://labyrinth.technigo.io/action', options)
      .then((respons) => respons.json())
      .then((data) => {
        console.log('data', data);
        console.log('data.coordinates:', data.coordinates);
        console.log('data.description:', data.description);
        console.log('data.actions:', data.actions);
        dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setActionOption(data.actions));
        dispatch(loading.actions.setLoading(false));
      })
  }
}

/*
export const nextStage = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true));
    const API_URL_ACTION = 'https://labyrinth.technigo.io/action';
    const optionsAction = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    };
    fetch(API_URL_ACTION, optionsAction)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        dispatch(labyrinth.actions.setStage(data));
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(loading.actions.setLoading(false)));
  };
};
*/