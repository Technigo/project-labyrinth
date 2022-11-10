import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    status: '',
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
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setPreviousStatus: (store, action) => {
      const actionArraylength = store.actions.length;
      // const array = [1, 2, 3, 4]
      // indexes are    0  1  2  3
      // array.splice(1, 2) => start deleting at index 1, delete 2 items
      // array === [1, 4]
      store.status = store.actions[actionArraylength - 1];
      store.actions.splice(actionArraylength - 1, 1);
      console.log(action);
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
      })
      .finally(dispatch(labyrinth.actions.setLoading(false)))
  }
}

export const GameNextFetch = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/start', {
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
        // dispatch(labyrinth.actions.setLoading(false));
      })
      .finally(dispatch(labyrinth.actions.setLoading(false)))
  };
};