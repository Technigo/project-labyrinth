import { game } from './game';

const START_URL = "https://wk16-backend.herokuapp.com/start"

export const generateInstructions = () => {

  return (dispatch) => { 
    fetch(START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "username": "MasterControlProgram" })
	  })
    .then(res => res.json())
    .then(data=> {
      dispatch(game.actions.startGame(data))
    })
  } 
  }
