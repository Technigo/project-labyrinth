import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { moves } from "../reducers/moves";
import StartButton from './StartButton';

const MoveControls = () => {
    const dispatch = useDispatch();
    //UseSelector stores the username inputted by the user and when they click the button form is submitted and the addUsername is called which dispatches the username to the addUser reducer by way of the payload. This then updates the username in the initialstate
    const [ username, setUsername ] = useState("");

    //Accessing the username the user inputted and that was sent to the redux store and is being stored in the initialstate. This is then dispatched to the initialState thunk in reusable.js when the user presses the button to start the game
    const universalUsername = useSelector ((state) => state.moves.username);

    const addUsername = (event) => {
        event.preventDefault();
        dispatch(moves.actions.addUser(username));
        setUsername("");
    };

    if (universalUsername) { 
        return <StartButton /> 
    }

    return (
        <div>
            <p>Enter your username and submit your username</p>
            <form onSubmit={addUsername} id="startgame">
                <input 
                    type="text" 
                    placeholder="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                >
                </input>
                <button type="submit" id="startgame">
                    Enter username
                </button>
            </form>                      
        </div>
    );
};

export default MoveControls;