import { gameDetails } from './gameDetails';

export const description = () => {
  return (dispatch, getState) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().gameDetails.username })
    }
    ).then(res => res.json())
      .then(data =>
        dispatch(gameDetails.actions.generateDescription(data)));
  };
};

export const move = (action) => {
  return (dispatch, getState) => {
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().gameDetails.username,
        type: 'move',
        direction: action.direction
      })
    }).then(res => res.json())
      .then(data =>
        dispatch(gameDetails.actions.generateMoves(data)));
  };
};
