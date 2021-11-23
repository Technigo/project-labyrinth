import React, {useState}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startThunk, actionThunk, game } from '../reducers/game'

export const Game = () => {
    const gameInformation = useSelector((store)=> store.game)
    const dispatch = useDispatch()

    const[newUserName,setNewUserName] = useState('')     
    
    {/*const onStart=()=> {
        console.log('onStartFunction')
        dispatch(startThunk(newUserName))
        dispatch(game.actions.setUserName(newUserName))
    }*/}
    
    const onAction = (action) => {
        dispatch(actionThunk(newUserName, action))
    }

    return (
        <>
        <form >
            <input
            type="text"
            placeholder="Your User Name"
            onChange={(event) => setNewUserName(event.target.value)}
            value={newUserName}>
            </input>
            <button 
                onClick={() => dispatch(startThunk(newUserName))}
                
                type= 'submit'
                >Start The Game </button>
        
        </form>
            

         <div>
            {gameInformation.description}
            {gameInformation.actions.map((action) => (
              <button 
                key={action.description} 
                onClick={() => onAction(action)}
              >
            
                {action.type} {action.direction}
              </button>
            ))}


         </div>       
        </>
    )
}