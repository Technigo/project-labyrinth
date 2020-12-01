import { game } from './game'

export const generateNewMove = () => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: "POST",
      headers: { "Content-Type": "application/json" },//tells the server that this is json
      body: JSON.stringify({//turns json in to text
        username: "starGirl"
      })
    })
      .then(res => res.json())
      .then(data => {
        dispatch(game.actions.generateDirection(data))
      })
  }
}

/* export const generateNewDirections = () => {
  return (dispatch) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },//tells the server that this is json
      body: JSON.stringify({//turns json in to text
        username: "ellen"
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(directions.actions.generateDirections(data));
      });
  };
};
*/