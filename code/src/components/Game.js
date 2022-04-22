import React from 'react'
import { useSelector } from 'react-redux'

import Loading from './Loading'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const Game = () => {
    const username = useSelector(store => store.game.username)
    const isLoading = useSelector((store) => store.ui.isLoading)


return (
    <div>
         {isLoading && <Loading/>}
        {!isLoading && (
            <>
        {username 
            ? <GameScreen />
            : <StartScreen/>
        }
        </>
        )
        
        }
        </div>
) 
}

export default Game