// import { gameState } from './gameState';

export const startFetch = () => {
    return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({ "username": "TechnigoPlayer" }),
    })
    .then((res) => res.json())
         .then(data => dispatch(console.log(data)));
    }

};


// (gameState.actions.startGame(data))   - efter (data => dispatch...????