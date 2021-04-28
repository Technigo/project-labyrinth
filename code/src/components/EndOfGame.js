import React from 'react'

import { useSelector} from 'react-redux'

const EndOfGame = () => {
    const userName = useSelector((store) => store.game.username)
        return (
            <>
                <p>Hello, {userName}</p>
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