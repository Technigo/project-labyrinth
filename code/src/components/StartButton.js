import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initiateStart } from "../reducers/reusable";
import MoveContainer from './MoveContainer';
import Loading from "./Loading";

const StartButton = () => {
    const move = useSelector ((state) => state.moves.move);
    const universalUsername = useSelector ((state) => state.moves.username);
    const dispatch = useDispatch();

    if (move.coordinates) {
        return <MoveContainer />
    };

    return (
        <>
            <Loading />
            <p>{universalUsername} press start to start your labyrinth journey!</p>              
            <button onClick={() => dispatch(initiateStart(universalUsername))}>START</button>
        </>
    );
};

export default StartButton;