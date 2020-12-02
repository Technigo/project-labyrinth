import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { initiateAction } from "../reducers/reusable";
import EndPage from "./EndPage";
import Loading from "./Loading";

const MoveContainer = () => {

    //Accessing what get's stored in the move object including the initial action array object from the first post request that has the start endpoint. 
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);
    const dispatch = useDispatch();
    // const moveArray = useSelector ((state) => state.moves.history)

    //When the user clicks the button, which is made up of the action type and direction, the onNextMove function is called and the post request is sent to the action end point in the initiateAction function is reusable.js. This will happen for each of the action array elements returned when the post request is clicked and the direction has been chosen. Also sending in the direction that we click on so the post request knows which direction the user wants to go and also what to return when the post request is completed. 
    const onNextMove = (direction, universalUsername) => {
        dispatch(initiateAction(direction, universalUsername));
    };

    const onHistoryBack = () => {
        dispatch(move.actions.historyGoBack());
    };

    if (move.actions.length === 0) {
        return  <EndPage />        
    };

    return (
        <div>
            <Loading />
            <p>Your coordinates: {move.coordinates}</p>
            <p>{move.description}</p>
                {move.actions.map(action => (
                    <div key={action.description}>
                      <p>{action.description}</p>
                      <button 
                          onClick={() => onNextMove(action.direction, universalUsername)}>
                          Move {action.direction}
                      </button>
                  </div >
                ))}
            {move.actions.length > 1 && <button onClick={onHistoryBack}>Back</button>}
        </div>
    );
};

export default MoveContainer;