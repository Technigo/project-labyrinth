import React from 'react'
import { useSelector } from 'react-redux'

import Game from './Game'
import StartScreen from './StartScreen'

const MainComponent = () => {
    const userName = useSelector(store => store.games.username)
    return userName ? <Game /> : <StartScreen />

    

}


export default MainComponent