import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initiateStart } from "../reducers/reusable";
import { moves } from "../reducers/moves";
import MoveContainer from './MoveContainer';

const MoveControls = () => {
    const dispatch = useDispatch();
    const move = useSelector ((state) => state.moves.move);

    //UseSelector stores the username inputted by the user and when they click the button form is submitted and the addUsername is called which dispatches the username to the addUser reducer by way of the payload. This then updates the username in the initialstate
    const [ username, setUsername ] = useState("");

    //Accessing the username the user inputted and that was sent to the redux store and is being stored in the initialstate. This is then dispatched to the initialState thunk in reusable.js when the user presses the button to start the game
    const universalUsername = useSelector ((state) => state.moves.username);

    const addUsername = (event) => {
        event.preventDefault();
        dispatch(moves.actions.addUser(username))
    };

    const handleOnClickStart = () => {
        dispatch(initiateStart(universalUsername));
    };

    return (
        <div>
            <p>Enter your username and submit your username</p>
            <form onSubmit={addUsername} id="startgame">
                <input 
                    type="text" 
                    placeholder="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}>
                </input>
                <button type="submit" id="startgame">
                    Add username
                </button>
            </form>
            {/* Object.keys(moves) is a way to check if an object is empty or not and here we're comparing if the length of the object move in the global store is higher than 0 then the MoveContainer should be shown  */}       
            <p>Enter START to start the game!</p>              
            <button onClick={handleOnClickStart}>START</button>
            {Object.keys(move).length > 0 && <MoveContainer /> }                       
        </div>
    );
};

export default MoveControls;