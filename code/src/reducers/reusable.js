import { gameReducer } from './gameReducer';

export const requestStartGame = (inUserName) => {
  return (dispatch) => {
      
      const userName = inUserName;
      const start_URL = "https://wk16-backend.herokuapp.com/start";
      const myHeaders = new Headers();
      
      dispatch(gameReducer.actions.setUserName(userName));

      myHeaders.append("Content-Type", "application/json");
      const messageToPost = JSON.stringify({username: userName});
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: messageToPost,
        redirect: 'follow'
      };

      dispatch(gameReducer.actions.setGameLoading(true));
      fetch(start_URL,requestOptions)
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameReducer.actions.setCurrentState(data));
        dispatch(gameReducer.actions.setGameLoading(false));
        dispatch(gameReducer.actions.setGameStarted(true));
      });
  } 
}

export const moveForwardInGame = (inDirection,inUserName) => {
  return (dispatch) => {
    const userName = inUserName;
    const move_URL = "https://wk16-backend.herokuapp.com/action";
    const myHeaders = new Headers();
    const type = "move";

    myHeaders.append("Content-Type", "application/json");
    const messageToPost = JSON.stringify({username: userName, type: type, direction: inDirection });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: messageToPost,
      redirect: 'follow'
    };

    dispatch(gameReducer.actions.setGameLoading(true));
    fetch(move_URL,requestOptions)
    .then((res) => res.json())
    .then((data) => {
      dispatch(gameReducer.actions.setCurrentState(data));
      dispatch(gameReducer.actions.setGameLoading(false));
    });
} 
}
