import { gameReducer } from './gameReducer'

export const handleClick = (direction) => {
  return (dispatch) => {
    const body = JSON.stringify({
      username: '2ndPlayer',
      type: 'move',
      direction
    })
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gameReducer.actions.makeMove(json))
      })
  }
}