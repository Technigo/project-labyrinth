import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSecondaryInstructions, gamestate } from 'reducers/gamestate';

import { EndGamePage } from 'pages/EndGamePage';
// import cave from '../assets/cave.jpg';
// import workshop from '../assets/workshop.jpg';

// Page showing instructions we got as reponse from the Backend
// Accessing the object with the instructions and showing them to the user
export const InGamePage = () => {
  const globalGameStatus = useSelector((state) => state.gamestate.gameStatus);
  const actions = useSelector((state) => state.gamestate.gameStatus.actions);
  const globalUsername = useSelector((state) => state.gamestate.username);
  const historyArrray = useSelector((state) => state.gamestate.history);

  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(gamestate.actions.historyGoBack());
  };

  // Function to show a different background image based on the coordinates
  // from each description
  // const imagePicker = () => {
  //   if (globalGameStatus.coordinates === "0,0") {
  //     return cave;
  //   } else if (globalGameStatus.coordinates === "1,1") {
  //     return workshop;
  //   }
  // };

  // When the user has reached the end of the game, the actions array becomes empty,
  // so we can show the end game page conditionally based on that
  if (actions.length === 0) {
    return (
      <EndGamePage />
    );
  };

  return (
    <>
      {/*<div style={{backgroundImage: `url(${imagePicker()})`}}>*/}
      <div>
        <h2>{globalGameStatus.description}</h2>
      </div>

      <h3>Actions you can take:</h3>

      {actions.map((action) => (
        <div key={action.description} style={{width: "400px", border: "2px solid blue"}}>
          <h4>{action.description}</h4>
          <h5>MOVE</h5>
          {/* This button will dispatch the second fetch thunk which will do the coming fetches with the next set of instructions
          to show the user: for this fetch we need to send an object including the username, type="move" and the direction the user chose
          so we send that data as a prop to the reducer*/}
          <button type="button" onClick={() => dispatch(fetchSecondaryInstructions(globalUsername, action.direction))}>{action.direction}</button>
        </div>
      ))}
      {/*This button will allow the user to go back to their previous move, it calls the onHistoryBack function which dispatches
      the historyGoBack action from our reducer. This button will only be enabled after the user has clicked past the first set
      of instructions, so when the history array is longer than 1*/}
      <button type="button" onClick={onHistoryBack} disabled={historyArrray.length === 1}>GO BACK</button>
    </>
  );
};

// Flow: InGamePage > EndGamePage
