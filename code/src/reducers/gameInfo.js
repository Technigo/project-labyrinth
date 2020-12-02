import { gameDetails } from './gameDetails';


export const getDescription = () => {
  //const URL_START_GAME = "https://wk16-backend.herokuapp.com/start"

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'username':'TestUser'})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.setDescription(data)));

      };
};


export const getMoves = (username, action) => {
  const URL_START_GAME = "https://wk16-backend.herokuapp.com/start"

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'username':'TestUser',
        type: action.type,
        direction: action.direction})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.setMoves(data)));
      };
};
