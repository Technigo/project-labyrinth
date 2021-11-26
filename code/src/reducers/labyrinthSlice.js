import { createSlice } from '@reduxjs/toolkit';

export const labyrinthSlice = createSlice({
  name: 'labyrinthSlice',
  initialState: {
    username: '',
    currentPosition:[],
    loading: false,
  },
  reducers: {
    // sets a username
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    // sets the current position in the labyrinth
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const startGameThunk = () => {
  return (dispatch, getState) => {
	dispatch(labyrinthSlice.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // gets the local state for the username
        username: getState().labyrinthSlice.username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatches the current position and its data to the state
        dispatch(labyrinthSlice.actions.setCurrentPosition(data));
      })
      .finally(() => dispatch(labyrinthSlice.actions.setLoading(false)));
  };
};

// this executes when the user chooses an option for where to go
export const nextStepThunk = (type, direction) => {
  return (dispatch, getState) => {
	dispatch(labyrinthSlice.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().labyrinthSlice.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinthSlice.actions.setCurrentPosition(data));
      })
      .finally(() => dispatch(labyrinthSlice.actions.setLoading(false)));
  };
};
