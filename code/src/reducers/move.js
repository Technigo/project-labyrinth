import { createSlice } from '@reduxjs/toolkit'

//const initialState = {
    // coinList: []
    // coordinates: "0,0",
    // description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    // actions: [
    //     {
    //         type: "move",
    //         direction: "East",
    //         description: "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
    //     }
    
//}

export const move = createSlice({
  name: 'move',
  initialState: {
    coinList: []
  },
  reducers: {
    setUserName: (state, action) => {
        state.coinList = action.payload
    }
}})

export const fetchMaze = () => {
    return (dispatch) => {
      /* dispatch(ui.actions.setLoading(true)); */
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res) => res.json())
        .then((json) => {
          dispatch(move.actions.setUserName(json))
          console.log("json", json[0].name)
          /* dispatch(ui.actions.setLoading(false)); */
        });
    };
  };