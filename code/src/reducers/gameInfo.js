import { gameDetails } from './gameDetails';


export const generateDescription = () => {
  //const URL_START_GAME = "https://wk16-backend.herokuapp.com/start"

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'username':'TestUser'})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.generateDescription(data)));

      };
};


export const generateMoves = () => {
  //const URL_START_GAME = "https://wk16-backend.herokuapp.com/start"

  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'username':'TestUser',
      type:'move',
    direction:"East"})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.generateMoves(data)));
      };
};
