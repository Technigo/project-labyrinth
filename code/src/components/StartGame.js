import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { initiateStart } from "../reducers/reusable";
import MoveContainer from './MoveContainer';

const MoveControls = () => {
    const dispatch = useDispatch();
    const move = useSelector ((store) => store.moves.move)

    const handleOnClickStart = () => {
        dispatch(initiateStart());
    }

    // const onChangeEvent = (value) => {
    //     dispatch(moves.actions.addUser(value))
    // }

    return (
        <div>
            {/* <p>{userName}</p>
            <p>Please enter your username to find Santa!</p> */}
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username"
                    onChange={event => onChangeEvent(event.target.value)}>
                </input>
                <button type="submit">
                    Start
                </button>
            </form> */}
            {/* Object.keys(moves) is a way to check if an object is empty or not and here we're comparing if the length of the object move in the global store is higher than 0 then the MoveContainer should be shown  */}
            <p>Press the button to start the game!</p>
            <button onClick={handleOnClickStart}>Start</button>
            {Object.keys(move).length > 0 && <MoveContainer /> }                       
        </div>
    );
};

export default MoveControls;