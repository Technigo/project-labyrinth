import React, { useState }from 'react'
import {useDispatch} from 'react-redux'
import labyrinth from '../reducers/labyrinth'
import { generateData } from '../reducers/labyrinth'

const UserForm = ()=>{
  const [userValue, setUserValue] = useState("")
  
  const dispatch = useDispatch()

  const onUserSet =()=>{
    dispatch(labyrinth.actions.addUserName(userValue))
    dispatch(generateData())
  }
  return (
    <div>
     <input type="text" value={userValue} onChange={e => setUserValue(e.target.value)}/>
     <button onClick={onUserSet}>username</button>
    </div>
  )
}
export default UserForm