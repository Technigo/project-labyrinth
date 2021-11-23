import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
    // coordinates: "0,0",
    // description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    // actions: [
    //     {
    //         type: "move",
    //         direction: "East",
    //         description: "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
    //     }
    // ]
    content: {},
}

export const move = createSlice({
  name: 'move',
  initialState,
  reducers: {
    setUserName: (state, action) => {
        state.content = action.payload
        console.log("state.initialState", state.content)
    }
}})

// export const fetchMaze = () => {
//     return (dispatch) => {
//       /* dispatch(ui.actions.setLoading(true)); */
//       fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
//         .then((res) => res.json())
//         .then((data) => {
//           dispatch(move.actions.setUserName(data))
//           console.log("json", data[0].name)
//           /* dispatch(ui.actions.setLoading(false)); */
//         });
//     };
//   };

export const startMaze = (dispatch) => {
    console.log("post innan")
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ username : "BestFox1" })
    }

    return (dispatch) => {
        
    fetch('https://wk16-backend.herokuapp.com/start', options)
    
        .then((res) => res.json())
        .then((data) => {
            console.log("post", data)
            dispatch(move.actions.setUserName(data))
            
        })
    }
}

