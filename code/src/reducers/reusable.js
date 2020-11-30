import { game } from './game';

export const onStartGame = (username) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username }), 
    }).then((res) => res.json())
      .then(json => {
        // console.log(json);
        dispatch(game.actions.enterGame(json));
      })
  }
}