import { game } from './game'
import { ui } from './ui'

export const fetchStart = (User) => {
  const START_API = 'https://wk16-backend.herokuapp.com/start/'

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: User })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const fetchNext = (User, direction) => {
  const NEXT_API = 'https://wk16-backend.herokuapp.com/action/'

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(NEXT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: User,
        type: 'move',
        direction })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}