import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    labyrinthDescription: [{ description: 'Wow it works!' }]
  },
  reducers: {
    setDescription: (state, action) => {
      state.labyrinthDescription = action.payload;
    }
  }
});

export const fetchStart = () => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'Owl' })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json));
      });
  };
};

export const fetchContinue = (username, type, direction) => {
  return (dispatch) => {
    // dispatch borde vara här
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Owl' })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json));
        dispatch(labyrinth.actions.setDesciptionHistory({ direction }));
      });
  };
};
