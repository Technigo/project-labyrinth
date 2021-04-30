import React from 'react'
import { useSelector } from 'react-redux'
import StartGame from './StartGame'

import game from '../reducers/game' 

const GameElements = () => {
    const gameElements = useSelector(store => store.game.gameElements)
    console.log(gameElements)

    return (
        <div>
            <p>{gameElements.description}</p>
            {/* // With gameElements.actions?.map we execute maping IF actions is an array. Shorthand to if statement. */}
           {/*  {gameElements.actions.map(item => { */}
               {/*  return ( */}
                    <button>Button</button>
                     
                    
                    {/* >{item.direction}</button> */}
              {/*   )   */}               
            
        </div>
    )
}

export default GameElements