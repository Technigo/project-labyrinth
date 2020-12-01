import { gameReducer } from './gameReducer'

export const HandleMove = (direction) => {
  return (dispatch, getState) => {
    const player = getState().gameReducer.playerName
    console.log(player, 'getState')
    const body = JSON.stringify({
      username: player,
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