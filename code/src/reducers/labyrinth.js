import { createSlice } from '@reduxjs/toolkit';
import ui from 'reducers/ui';

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
      if (store.quest !== '') {
        store.history.push(store.quest);
      }
      store.quest = action.payload;
    }
  }
});

export default labyrinth;

export const generateFetch = ({ url, username }) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        type: 'move',
        direction: 'East'
      })
    }

    fetch(url, options)
      .then((result) => result.json())
      .then((json) => {
        console.log('json', json)
        console.log('json.description', json.description)
        dispatch(labyrinth.actions.setChoice(json))
        dispatch(ui.actions.setLoading(false));
      });
  }
}

