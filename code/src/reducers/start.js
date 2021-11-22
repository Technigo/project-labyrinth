import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

export const start = createSlice({
  name: 'start',
  initialState: {
    startMode: [{ name: 'hello' }],
  },
  reducers: {
    setStartList: (state, action) => {
      state.startMode = action.payload;
    },
  },
});

export const fetchStart = () => {
  return dispatch => {
    //   dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'Hamburger' }),
    })
      .then(res => res.json())
      .then(json => {
        batch(() => {
          dispatch(start.actions.setStartList(json));
          //      dispatch(ui.action.setLoading(false));
          console.log('FETCH START', json);
        });
      });
  };
};
