import { useDispatch, useSelector } from 'react-redux';
import { gameReducer } from './gameReducer';
import { UserName } from '../assets/userName'
//Thunk
export const requestStartGame = () => {
  return (dispatch) => {
      const userName = UserName;
      const start_URL = "https://wk16-backend.herokuapp.com/start";
      const myHeaders = new Headers();
      
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
       console.log(data);
        dispatch(gameReducer.actions.setCurrentState(data));
        dispatch(gameReducer.actions.setGameLoading(false));
        dispatch(gameReducer.actions.setGameStarted(true));
      });
  } 
}

export const moveForwardInGame = (inDirection) => {
  return (dispatch) => {
    const userName = UserName;
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
     console.log("Move request, new data:",data);
      dispatch(gameReducer.actions.setCurrentState(data));
      dispatch(gameReducer.actions.setGameLoading(false));
    });
} 
}

//Function på knappen anropar thunken. Thunken hämtar data i fetch. sedan anropar den reducern med datat, som sätter state. 