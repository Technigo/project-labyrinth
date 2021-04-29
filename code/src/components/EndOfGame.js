import React from 'react'
import { useSelector} from 'react-redux'

const EndOfGame = () => {
    const currentDescription = useSelector((store) => store.game.gameStatus)

    return (
        <>
            <h1>{currentDescription.description}</h1>
            <button
                type="button"
                onClick={() => window.location.reload()}
            > 
                Restart game!
            </button>
        </>
     )
}

export default EndOfGame