import React from "react";
import { useSelector } from "react-redux";

import { moves } from "../reducers/moves";
import StartGame from  "./StartGame";

const MoveContainer = () => {
    const move = useSelector ((store) => store.moves.move)

    return (
        <div>
            <p>{move.coordinates}</p>
            <p>{move.description}</p>
            <p>{move.actions[0].description}</p>
            <button>{move.actions[0].type} {move.actions[0].direction}</button>
        </div>
    );
};

export default MoveContainer;