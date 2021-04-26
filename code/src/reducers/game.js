
import { createSlice } from '@reduxjs/toolkit'


const fetchInitStart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'MaHal' }),
  };

export const game = createSlice({
    name: 'game',
    initialState: {
        description: ''
    },
    reducers: {
        setDescription: (store, action) => {
            store.description = action.payload
        }
    
    }
})

export const fetchStart = () => {
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/start', fetchInitStart)
            .then(res => res.json())
            .then(json => {
                setDescription(json.description)
            })


    }
}

