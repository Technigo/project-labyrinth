import { gameDetails } from './gameDetails';

export const getDescription = (userName) => {
  return (dispatch, getState) => {
    dispatch(gameDetails.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName })
    }).then(res => res.json())
      .then(data => {
        dispatch(gameDetails.actions.setDescription(data))
        dispatch(gameDetails.actions.setLoading(false));
      });
  };
};

export const getMoves = (action) => {

  return (dispatch, getState) => {
    dispatch(gameDetails.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().gameDetails.userName,
        type: "move",
        direction: action.direction
      })
    }).then(res => res.json())
      .then(data => {
        dispatch(gameDetails.actions.setLoading(false));
        if (data.actions.length === 0) {
          dispatch(gameDetails.actions.gameFinished())
        }
        dispatch(gameDetails.actions.setMoves(data));
      });
  };
};

