import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { labyrinth } from '../reducers/labyrinth'
import Labyrinth from './Labyrinth'


const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const currentUserName = useSelector((store) => store.labyrinth.userName)
    
    if (currentUserName === '') { 
return (
    <>
    <form onSubmit={(event) => {event.preventDefault()
        dispatch(labyrinth.actions.addUserName(userName))}}>
        <label>Please type your game-name:
            <input type="text" required value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </label>
        <button type="submit" >Let's go!</button>
    </form>
    
    </>
)} else {
    return <Labyrinth />
}
}


export default StartPage