import { createSlice } from '@reduxjs/toolkit';
import { loading } from './loading';

export const game = createSlice({
  name: 'game',
  initialState: {
    userName: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start')
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setUserName(json));
        dispatch(loading.actions.setLoading(false));
      });
  };
};
