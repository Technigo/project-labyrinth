import React from "react"
import { useSelector } from "react-redux"

const MoveContainer = () => {
    const move = useSelector(store => store.moves.move)

    return (
        <div>
            My move: {move.move}
        </div>
    )
}

 export default MoveContainer