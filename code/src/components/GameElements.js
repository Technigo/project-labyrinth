import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StartGame from './StartGame'

 import game, { continueGame } from 'reducers/game'

const GameElements = () => {
    const gameElements = useSelector(store => store.game.gameElements)
    const userName = useSelector(store => store.game.gameElements.userName)
   

    //console.log(gameElements)

    const dispatch = useDispatch()

    return (
        <div>
           <p>{gameElements.description}</p> 
            {/* // With gameElements.actions?.map we execute maping IF actions is an array. Shorthand to if statement. */}
           {gameElements.actions?.map(item => {
               return ( 
                    <button
                      key={item.direction}
                      onClick={() => dispatch(continueGame(userName, item.direction))}
                    >{item.direction}</button> 
                        
               )})}
        </div>
    )
}

export default GameElements