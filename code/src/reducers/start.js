import { createSlice } from '@reduxjs/toolkit';

export const start = createSlice({
  name: 'start',
  initialState: {
    username: null,
    description: '',
    actions: [],
    currentPosition: null,
    coordinates: '',
    loading: false,
    // history: []
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
    setRestartGame: store => {
      store.username = null;
      store.coordinates = null;
    },
    // setHistory () => {
    // if (store.currentPosition) {
    //   store.history = [...store.history, action.payload]
    //   }
    //}
  },
});

export const fetchStart = username => {
  return dispatch => {
    dispatch(start.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }),
    })
      .then(res => res.json())
      .then(json => {
        dispatch(start.actions.setDescription(json.description));
        dispatch(start.actions.setActions(json.actions));
        dispatch(start.actions.setCoordinates(json.coordinates));
      })
      .finally(() => dispatch(start.actions.setLoading(false)));
  };
};

export const continueGame = (username, direction) => {
  return dispatch => {
    dispatch(start.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        type: 'move',
        direction,
      }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(start.actions.setDescription(data.description));
        dispatch(start.actions.setActions(data.actions));
        dispatch(start.actions.setCoordinates(data.coordinates));
      })
      .finally(() => dispatch(start.actions.setLoading(false)));

    // dispatch(start.actions.setHistory(data))
  };
};
