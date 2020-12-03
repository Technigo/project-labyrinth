import { gameDetails } from './gameDetails';

//fetch to start the game and find the first description
export const getDescription = (userName) => {
  return (dispatch, getState) => {
    fetch('https://wk16-backend.herokuapp.com/start',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: userName})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.setDescription(data)));
      };
};

//this fetch reaches the array of actions that includes directions, it's own descriptions and type which is alwasy move
export const getMoves = (action) => {

  return (dispatch, getState) => {
    fetch('https://wk16-backend.herokuapp.com/action',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: getState().gameDetails.userName,
        type: "move",
        direction: action.direction
      })
    }).then(res => res.json())
      .then(data => {
        if (data.actions.length === 0) {
          dispatch(gameDetails.actions.gameFinished())
        }
        dispatch(gameDetails.actions.setMoves(data));
    });
      };
};

