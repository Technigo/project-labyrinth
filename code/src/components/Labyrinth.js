/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contiuneGame } from '../reducers/store'

const Labyrinth = () => {
    const { description, actions } = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch()

return (
    
       <div>   
        <p>{description}</p>
            
       {Array.isArray(actions)
       ? actions.map((action) => {
        return (
            <div key={action.id}>
        <p >{action.description}</p>
        <button type="button" onClick={() => dispatch(contiuneGame(action.type, action.direction))/* goToNextStep(actions) */} > {action.direction}</button>
        </div>
        )
       })
       :null}
        
       </div> 
    
)

}



export default Labyrinth;