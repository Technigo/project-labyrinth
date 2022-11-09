/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* import { game, fetchTheGame } from '../reducers/store' */

const Labyrinth = () => {
    const gameLore = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch()
    console.log('game lor', gameLore)

return (
    <>
 {/*            
       {gameLore.actions.map((direction) => {
        return (
            <p key={direction.id}>{direction.description}</p>
        )
       })} */}
       </>
    
)

}



export default Labyrinth;