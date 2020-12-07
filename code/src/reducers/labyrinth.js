import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialContent = localStorage.getItem('labyrinth')
  ? JSON.parse(localStorage.getItem('labyrinth'))
  : {};

const initialHistory = localStorage.getItem('history')
  ? JSON.parse(localStorage.getItem('history'))
  : [{}];

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    content: initialContent,
    history: initialHistory,
  },
  reducers: {
    setLabyrinthData: (state, action) => {
      state.content = action.payload;
      localStorage.setItem('labyrinth', JSON.stringify(action.payload));
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setStepHistory: (state, action) => {
      const addedHistory = [action.payload, ...state.history];
      state.history = addedHistory;
      localStorage.setItem('history', JSON.stringify(addedHistory));
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
        dispatch(labyrinth.actions.setLabyrinthData(json));

        if (url.includes('action')) {
          dispatch(
            labyrinth.actions.setStepHistory(direction) // If we want all history, we add data; json here
          );
        }
        dispatch(ui.actions.setLoading(false));
      });
  };
};
