import React from "react";
import { useSelector } from "react-redux";

const Summary = ({ description }) => {
    const history = useSelector((store) => store.game.moves)
    const userName = useSelector((store) => store.game.username);

    return (

        <div>
            <h3> Thank you {userName} for playing! </h3>
            <p>{description}</p>
            <p>  This is the path that you took:</p>
            {history.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}
            <button type="button" onClick={() => window.location.reload()}>Restart</button>
        </div>
    )
}

export default Summary