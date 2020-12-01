import { game } from './game'

export const generateStartMove = () => {
  const START_URL = 'https://wk16-backend.herokuapp.com/start'

  return (dispatch) => {
    fetch( START_URL , {
      method: "POST",
      headers: { "Content-Type": "application/json" },//tells the server that this is json
      body: JSON.stringify({//turns json in to text
        username: "starGirl"
      })
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(game.actions.generateDirection(data))
      })
  }
}

export const generateActionMove = () => {
  const ACTION_URL='https://wk16-backend.herokuapp.com/action'

  return (dispatch) => {
    fetch( ACTION_URL , {
      method: "POST",
      headers: { "Content-Type": "application/json" },//tells the server that this is json
      body: JSON.stringify({//turns json in to text
        username: "starGirl",
        type: "move",
        direction: "East"
      })
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(game.actions.generateDirection(data))
      })
  }
}


