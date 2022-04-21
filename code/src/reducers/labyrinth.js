import { createSlice } from "@reduxjs/toolkit";

const labyrinth = createSlice({
    name: "labyrinth",
    initialState: {
        player: null,
        stage: null,
        history: [],
    },
    reducers: {
        setPlayer: (store, action) => {
            store.player = action.payload;
        },
        setStage: (store, action) => {
            if (store.stage) {
                store.history.push(store.stage)
            }
            store.stage = action.payload;

        },
        setPreviousStage: (store, action) => {
            if (store.history.length !== 0) {
                store.stage = store.history[store.history.length - 1]
                store.history.splice(-1, 1)
            }
        },
        setRestartGame: (store, action) => {
            store.stage = null;
            store.player = null;
            store.history = [];
        }
    }
});

export const generateGame = (action = null) => {
    if (!action) {
        return (dispatch, getState) => {
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
    }

    return (dispatch, getState) => {
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
