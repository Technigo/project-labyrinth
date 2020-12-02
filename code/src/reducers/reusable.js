import { game } from './game'

export const nextPosition = (action, userName) => {

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify({
        username: userName,
        type: action.type,
        direction: action.direction
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(game.actions.setNextPosition(data))
      })
  }
}