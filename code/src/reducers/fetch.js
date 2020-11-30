import { game } from './game';


export const StartGame = (name) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": name })
      })
      .then(res => res.json())
      .then(data => dispatch(game.actions.nextAction(data)))
  }
}