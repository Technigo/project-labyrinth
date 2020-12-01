import { gameReducer } from './gameReducer'
import { ui } from './ui'

export const HandleMove = (direction) => {
  return (dispatch, getState) => {
    console.log('ui.actions', ui.actions);
    dispatch(ui.actions.setLoading(true))
    const player = getState().gameReducer.playerName
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
        dispatch(ui.actions.setLoading(false))
      })
  }
}