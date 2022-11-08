
import { createSlice } from '@reduxjs/toolkit';
import { loading } from './loading';

export const maingame = createSlice({
  name: 'maingame',
  initialState: {
    userName: '',
    gameProps: {
      coordinates: '',
      description: '',
      actions: []
    }
  },
  reducers: {
    setGameProps: (state, action) => {
      state.gameProps = action.payload;
    },
    setUsername: (state, action) => {
      state.userName = action.payload;
    }
  }

});

export const fetchGameStart = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().maingame.username })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(maingame.actions.setGameProps(json));
        dispatch(loading.actions.setLoading(false))
      })
  }
}
