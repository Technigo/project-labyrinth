import { game } from './game';


export const StartGame = (userName) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": userName })
      })
      .then(res => res.json())
      .then(data => dispatch(game.actions.nextAction(data)))
  }
}