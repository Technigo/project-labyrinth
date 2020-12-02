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

export const chooseDirection = (userName, direction) => {

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                  "username": userName, 
                  "type": "move", 
                  "direction": direction
                })
      })
      .then(res => res.json())
      .then(data => { 
        dispatch(game.actions.nextAction(data))
        dispatch(game.actions.setLoader(false))
      })
  }
}