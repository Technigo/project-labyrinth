/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contiuneGame, fetchTheGame } from '../reducers/store'

const Labyrinth = () => {
    const { description, actions, coordinates } = useSelector((store) => store.game.currentDirection)
    const dispatch = useDispatch()

    const onRestartButton = () => {
       window.location.reload();
    }

return (
       <div>   

        <p>{description}</p>
        
       {Array.isArray(actions)
       ? actions.map((action) => {
        return (
            <div key={action.id}>

        <p >{action.description}</p>
        <button type="button" onClick={() => dispatch(contiuneGame(action.type, action.direction))} > {action.direction}</button>
        </div>
        )
       })
       :null}
        
       
       <div className="restart">
        {coordinates === "1,3" ?  (
            <button type="button" onClick={onRestartButton}> Play Again </button>
            ): <button type="button" onClick={onRestartButton}>Restart</button>}
       </div>
       
       </div> 
     
    
)

}



export default Labyrinth;