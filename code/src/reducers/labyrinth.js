import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialContent = localStorage.getItem('labyrinth')
  ? JSON.parse(localStorage.getItem('labyrinth'))
  : {};

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    content: initialContent,
  },
  reducers: {
    setLabyrinthData: (state, action) => {
      state.content = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const fetchLabyrinthData = ({ url, username, type, direction }) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: username,
          type: type,
          direction: direction,
      }),
    })
      .then((results) => results.json())
      .then((json) => {
        localStorage.setItem('labyrinth', JSON.stringify(json));
        dispatch(labyrinth.actions.setLabyrinthData(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
