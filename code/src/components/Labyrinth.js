/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contiuneGame } from '../reducers/store'

const Labyrinth = () => {
    const { description, actions } = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch()
    // console.log('game lor', gameLore)
    const goToNextStep = (actions) => {
        dispatch(contiuneGame(actions))
    }

return (
    
       <div>   
        <p>{description}</p>
            
       {Array.isArray(actions)
       ? actions.map((action) => {
        return (
            <div key={action.id}>
        <p >{action.description}</p>
        <button type="button" onClick={() => goToNextStep(actions)} > {action.direction}</button>
        </div>
        )
       })
       :null}
        
       </div> 
    
)

}



export default Labyrinth;