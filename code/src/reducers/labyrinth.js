import { createSlice } from "@reduxjs/toolkit";

const labyrinth = createSlice({
    name: "labyrinth",
    initialState: {
        player: null,
        // author: null,
        stage: null,
        // type: null,
        // direction: null,
        history: [],
    },
    reducers: {
        // setAuthor: (store, action) => {
        //     store.author = action.payload;
        // },
        setPlayer: (store, action) => {
            store.player = action.payload;
        },
        setStage: (store, action) => {
            // console.log('setting stage')
             if (store.stage) {
                 store.history.push(store.stage)
            }
            // console.log(store.stage);
            store.stage = action.payload;

        },
        // setQuote: (store, action) => {
        //     if (store.quote) {
        //         store.history.push(store.quote)
        //     }
        //     store.quote = action.payload;
        // },
         setPreviousStage: (store, action) => {
             if (store.history.length !== 0) {
                 store.stage = store.history[store.history.length - 1]
                 store.history.splice(-1, 1)
             }
         }
    }
});

export const generateGame = (action = null) => {
    // console.log(type, direction)
    
        if (!action) {
            return (dispatch, getState) => {
                console.log("start")
                const options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: getState().labyrinth.player,
                    }),
                }; 
                fetch(`https://labyrinth-technigo.herokuapp.com/start`, options)
                    .then(res => res.json())
                    .then(stage => dispatch(labyrinth.actions.setStage(stage)))
            }
                // .then(stage => console.log(stage))
        }
        
        console.log("action")
        console.log("action.type, action.direction", action.type, action.direction)
        return (dispatch, getState) => {
            // {console.log(getState.labyrinth.player)}
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: getState().labyrinth.player,
                    type: action.type,
                    direction: action.direction,
                }),
            }; 
            fetch(`https://labyrinth-technigo.herokuapp.com/action`, options)
                .then(res => res.json())
                .then(stage => dispatch(labyrinth.actions.setStage(stage)))
        }
}

// export const continueGame = (type, direction) => {
//     return (dispatch, getState) => {
//         const options = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 username: getState().labyrinth.player,
//                 type: type,
//                 direction: direction,
//             }),
//         };
//         fetch(`https://labyrinth-technigo.herokuapp.com/action`, options)
//             .then(res => res.json())
//             // .then(stage => dispatch(labyrinth.actions.setStage(stage)))
//             .then(stage => console.log(stage, "stage is consoled from continueGame"))
//     }
// };

// export const generateQuote = (tag) => {
//     return (dispatch, getState) => {
//         if (tag) {
//             fetch(`http://api.quotable.io/random?author=${getState().labyrinth.author}&tags=${tag}`)
//                 .then(res => res.json())
//                 .then(quote => dispatch(labyrinth.actions.setQuote(quote)))
//         } else {
//             fetch(`http://api.quotable.io/random?author=${getState().labyrinth.author}`)
//                 .then(res => res.json())
//                 .then(quote => dispatch(labyrinth.actions.setQuote(quote)))
//                 // export const playerAction = () => {
//                 //     return (dispatch, getState) => {
//                 //       const settings = {
//                 //         method: "POST",
//                 //         headers: { "Content-Type": "application/json" },
//                 //         body: JSON.stringify({
//                 //           username: getState().game.username,
//                 //           type: getState().game.type,
//                 //           direction: getState().game.direction,
//                 //         }),
//                 //       }; 
//         }
//     }
// }

export default labyrinth;
