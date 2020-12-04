import { game } from './game'

export const getFirstPosition = (userName) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify({
        username: userName
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch(game.actions.setStartPosition(data))
        dispatch(game.actions.setLoading(false))
      })
  }
}

export const getNextPosition = (action, userName) => {

  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
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
        console.log(data)
        dispatch(game.actions.setNextPosition(data))
        dispatch(game.actions.setLoading(false))
      })
  }
}