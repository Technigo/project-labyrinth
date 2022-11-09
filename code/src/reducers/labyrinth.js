import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'quests',
  initialState: {
    username: '',
    quest: '',
    history: []
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
    setChoice: (store, action) => {
      store.quote = action.payload;
    }
  }
});

export default labyrinth;

export const generateFetch = () => {
  return () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'username',
        type: 'move',
        direction: 'East'
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((result) => result.json())
      .then((json) => console.log(json))
  }
}