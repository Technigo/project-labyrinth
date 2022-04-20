import React from 'react'
import { useSelector } from 'react-redux'

const GameScreen = () => {
    const description = useSelector(store => store.game.player.description)
    console.log(description)

    return <div>This is description : {description}</div>
    

}
export default GameScreen