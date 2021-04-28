/* eslint-disable no-console */
import { setState } from './game';
import { setRoom } from './room';

export const callAPI = (endpoint, message) => {
  return (dispatch) => {
    dispatch(setState('Loading'));
    fetch(`https://wk16-backend.herokuapp.com/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...message })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setRoom(data));
      })
      .catch((err) => {
        err.json().then((errMessage) => {
          // textArea.current.handleNewError({
          //   title: errMessage.message,
          //   message: errMessage.errors.message.message
          // });
          console.log(errMessage);
        });
      });
  };
};