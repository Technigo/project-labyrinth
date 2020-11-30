import { game } from './game'

//const START_URL = "https://wk16-backend.herokuapp.com/start"
//const ACTION_URL = "https://wk16-backend.herokuapp.com/action"

// FETCH FOR START 
export const GenerateAction = (userName) => {

  return(dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "username": userName })
	})
  .then(res => res.json())
  .then(data => dispatch(game.actions.GenerateAction(data)))
  }
}
