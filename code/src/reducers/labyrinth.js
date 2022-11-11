import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    status: '',
    // started: false,
    description: '',
    actions: [],
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setStatus: (store, action) => {
      if (store.status !== '') {
        store.actions.push(store.status);
      }
      store.status = action.payload;
    },
    setPreviousStatus: (store, action) => {
      const actionArraylength = store.actions.length;
      if (actionArraylength > 1) {
        store.status = store.actions[actionArraylength - 1];
        store.actions.splice(actionArraylength - 1, 1);
        console.log(action);
      }
      //  else (actionArraylength  === 0) {

      // return <UserInput />}
    },

    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
})

export default labyrinth;

export const generateLabyrinth = () => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('generateLabyrinth', data)
        dispatch(labyrinth.actions.setStatus(data))
        dispatch(labyrinth.actions.setLoading(false));
      })
  }
}

export const GameNextFetch = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('GameNextFetch', data)
        dispatch(labyrinth.actions.setStatus(data));
        dispatch(labyrinth.actions.setLoading(false));
      })
  };
};