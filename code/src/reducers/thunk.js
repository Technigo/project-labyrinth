import { game } from './game'
import { ui } from './ui'

export const fetchGameData = username => {  
  
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
      fetch('https://wk16-backend.herokuapp.com/start', {
          method: 'POST',
          headers: {'Content-type': 'application/json'}, 
          body: JSON.stringify({ 
              username: username
          })
      })
              .then(res => res.json())
              .then(data => { 
                dispatch(game.actions.setGame({ data }))
                dispatch(ui.actions.setLoading(false))
            })
  }
}

export const fetchActionData = (username, type, direction) => {    
    return (dispatch) => {
      dispatch(ui.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ 
                username: username,
                type: type,
                direction: direction
            }) 
        })
                .then(res => res.json())
                .then(data => { 
                  dispatch(game.actions.setGame({ data }))
                  dispatch(ui.actions.setLoading(false))
              })
    }
  }