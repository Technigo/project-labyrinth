import React from 'react';
import { useSelector } from "react-redux";

const EndPage = () => {
    const move = useSelector ((state) => state.moves.move);

    const resetPage = () => {
        window.location.reload()
    };
    
    return (
        <div>
            <p>Your coordinates: {move.coordinates}</p>
            <p>{move.description}</p>
            <button onClick={resetPage}>Restart the game</button>
        </div>
    );
};

export default EndPage;