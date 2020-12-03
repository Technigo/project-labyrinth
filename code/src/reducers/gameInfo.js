import { gameDetails } from './gameDetails';

//fetch to start the game and find the first description
export const getDescription = (userName) => {
  //const URL_START_GAME = "https://wk16-backend.herokuapp.com/start"

  return (dispatch, getState) => {
    fetch('https://wk16-backend.herokuapp.com/start',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: userName})
    }
      ).then(res => res.json())
      .then(data => 
        dispatch(gameDetails.actions.setDescription(data)));
        console.log(data);
      };
};

//what is action here
export const getMoves = (action) => {
  //const URL_START_GAME = "https://wk16-backend.herokuapp.com/action"

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
      .then(data => 
        dispatch(gameDetails.actions.setMoves(data)));
      };
};
