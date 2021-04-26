import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
      playerName: null,
      actions: [{
      type: null, 
      direction: null,
      description: null, 
    }]
  },
  reducers: {
    setName: (store, action) => {
      store.playerName = action.payload
  },
    setDirection: (store, action) => {
      store.actions.direction = action.payload
  }
  }
})

export const generateContent = () => {
  const config = {   
    method: 'POST', 
    headers: {              
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: store.playerName })     
  }

  return (dispatch, getState) => {
      // if () {
      //     fetch(`https://wk16-backend.herokuapp.com/action`)
      //         .then(res => res.json())
      //         .then(data => dispatch(labyrinth.actions.setQuote(data)))
      // } else {
          fetch(`https://wk16-backend.herokuapp.com/start`)
              .then(res => res.json())
              .then(data => {
                dispatch(labyrinth.actions.setName(data))
                console.log(data)
              })
  }
}


export default labyrinth;


const handleFormSubmit = (event) => {
  event.preventDefault();

  if (!validateFormInput()) {
    return;
  }

  const config = {   
      method: 'POST', 
      headers: {              
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })     
  };

  fetch(API_URL, config)      
    .then(res => {
      if (res.ok) {
        return res.json();
      } 
      throw new Error('Error! Something went wrong. Try again!')
    })
    .then(() => fetchMessageList())     
    .catch(err => {
      setErrorMessage(err.message);
    });      

  setNewMessage('');
};