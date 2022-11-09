import React from "react";
import { CreateQuestion } from "reducers/games"

const GameBoard = () => {
//   const description = useSelector(store => store.games.currentPosition.description)
    return (
        <div>
    {/* <section>{description}</section> */}
    <CreateQuestion/>
        </div>
    )
    }

export default GameBoard;