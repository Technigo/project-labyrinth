import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
/* import { useSelector } from 'react-redux'; */

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
