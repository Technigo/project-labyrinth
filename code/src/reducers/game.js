import { createSlice } from '@reduxjs/toolkit';

const fetchInitNext = (direction, type) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'MaHal4',
      type: type,
      direction: direction,
    }),
  };
};

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
    user: '',
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
    setUser: (store, action) => {
      store.user = action.payload;
    },
  },
});

export const fetchInit = (direction = '', type = '') => {
  console.log(game.user);
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: game.user,
      type: type,
      direction: direction,
    }),
  };
};

export const fetchStart = () => {
  return (dispatch, getState) => {
    // dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', fetchInit())
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
        // dispatch(game.actions.setLoading(false))
      });
  };
};

export const fetchNext = (direction, type) => {
  return (dispatch, getState) => {
    fetch(
      'https://wk16-backend.herokuapp.com/action',
      fetchInit(direction, type)
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
      });
  };
};
