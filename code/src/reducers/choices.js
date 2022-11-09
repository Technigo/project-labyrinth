/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui'

const items = [
  // { id: 1, text: 'Water the plants', complete: false },
  // { id: 2, text: 'Practise playing the guitar', complete: false },
  // { id: 3, text: 'Do your daily kata!', complete: false }
]

export const choices = createSlice({
  name: 'choices',
  initialState: {
    description: '',
    items
  },
  currentUser: '',
  reducers: {
    // addDescription: (state, action) => {
    //   state.items.push({
    //     description: '',
    //     actions: [{
    //       type: action.payload,
    //       direction: action.payload,
    //       description: action.payload
    //     }]
    //   })
    // },
    addDescription: (state, action) => {
      state.description = action.payload;
    },

    addItems: (state, action) => {
      state.items = action.payload;
    },

    /*
    const quotes = createSlice({
      name: 'quotes',
      initialState: {
      author: '',
      quote: '',
      history: []
    },
    reducers: {
      setAuthor: (store, action) => {
        store.author = action.payload;
    },
      setQuote: (store, action) => {
        store.quote = action.payload;
    }
  }
});
    */
    addUserName: (state, action) => {
      state.currentUser = action.payload
      console.log('currentuser is:', state.currentUser)
    }
    /* ,
    selectDirection: (state, action) => {
      state.items
    }
*/
  }
}) // ENDING PARENTESIS

export const fetchChoices = () => {
  return (dispatch, getState) => {
    console.log('user is:', getState().choices.currentUser)
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().choices.currentUser })
    })
      .then((response) => response.json())
      .then((json) => {
        // update state/store with the api data
        dispatch(choices.actions.addDescription(json.description))
        dispatch(choices.actions.addItems(json.actions))
        dispatch(ui.actions.setLoading(false))
        console.log('fetch done')
        console.log('description:', getState().choices.description)
      })
  }
}