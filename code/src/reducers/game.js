import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    description: '',
    actions: [
      {
        type: '',
        direction: '',
        description: '',
      },
    ],
    coordinates: '',
    user: null,
  },
  reducers: {
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setUserState: (store, action) => {
      store.user = action.payload;
    },
  },
});

export const fetchInit = (user, type = null, direction = null, mode) => {
  if (mode === 'start') {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
      }),
    };
  } else if (mode === 'next') {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
        type: type,
        direction: direction,
      }),
    };
  }
};

export const fetchStart = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch(
      'https://wk16-backend.herokuapp.com/start',
      fetchInit(getState().game.user, null, null, 'start')
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const fetchNext = (direction, type) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch(
      'https://wk16-backend.herokuapp.com/action',
      fetchInit(getState().game.user, type, direction, 'next')
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
