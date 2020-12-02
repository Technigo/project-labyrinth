import { game } from './game';
import { ui } from './ui'; 

const START_URL = "https://wk16-backend.herokuapp.com/start"

export const generateStartInstructions = (playerName) => {

  return (dispatch) => { 
    dispatch(ui.actions.setLoading(true))
    fetch(START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: playerName})
	  })
    .then(res => res.json())
    .then(data => {
      dispatch(game.actions.startGame(data))
      dispatch(ui.actions.setLoading(false))
    });
  };
};

const CONTINUE_URL = "https://wk16-backend.herokuapp.com/action"

export const generateGameProgress = (playerName, direction) => {

  return (dispatch) => { 
    dispatch(ui.actions.setLoading(true))
    fetch(CONTINUE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        username: playerName,
        type: "move", 
        direction: direction
      })
	  })
    .then(res => res.json())
    .then(data => {
      dispatch(game.actions.continueGame(data))
      dispatch(ui.actions.setLoading(false))
    });
  };
};



