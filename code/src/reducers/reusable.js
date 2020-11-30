import { game } from './game'

const START_URL = "https://wk16-backend.herokuapp.com/start"
// FETCH FOR START 
export const generateNewDirection = () => {

  return(dispatch) => {
    fetch(START_URL, {
      method: "POST",
      body: JSON.stringify({ "username": "Lind" }),
      headers: { "Content-Type": "application/json" }
	})
  .then(res => res.json())
  .then(data => {
	  dispatch(game.actions.generateDirection(data))
  })
}
}