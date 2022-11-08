
export const fetchStart = (User) => {
  const START_API = 'https://labyrinth.technigo.io/start'

  return (dispatch) => {
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'User'
      })
    })
    /* .then((res) => res.json())
     .then((json) => {
       dispatch(game.actions.setCurrentStep(json))
       dispatch(ui.actions.setLoading(false))
     }) */
  }
}

export const fetchNext = (User) => {
  const NEXT_API = 'https://labyrinth.technigo.io/action'

  return (dispatch) => {
    fetch(NEXT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'User',
        type: 'move',
        direction: 'direction'
      })
    })
  }
  /* .then((res) => res.json())
   .then((json) => {
     dispatch(game.actions.setCurrentStep(json))
     dispatch(ui.actions.setLoading(false))
   }) */
}
