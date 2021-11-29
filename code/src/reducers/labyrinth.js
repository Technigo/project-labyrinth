import { createSlice } from '@reduxjs/toolkit';
import { animation } from './animation';

// this is for the labyrinth-game
export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    destination: [],
    userName: '',
  },
  reducers: {
    setLabyrinthPath: (state, action) => {
      state.destination = action.payload;
    },
    addUserName: (state, action) => {
      state.userName = action.payload;
    },
    restartLabyrinth: (state) => {
      state.destination = [];
      state.userName = '';
    },
  },
});
// this is passed along, depending on what user clicks on
export const fetchLabyrinth = ({ url, type, direction }) => {
  return (dispatch, getState) => {
    dispatch(animation.actions.setLoading(true));
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.userName,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthPath(json));
        // we can type .finally id useHistory is added at a later stage
        dispatch(animation.actions.setLoading(false));
      });
  };
};
