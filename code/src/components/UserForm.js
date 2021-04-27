import React, { useState }from 'react'
import {useDispatch} from 'react-redux'
import labyrinth from '../reducers/labyrinth'

const UserForm = ()=>{
  const [userValue, setUserValue] = useState("")
  
  const dispatch = useDispatch()

  const onUserSet =()=>{
    dispatch(labyrinth.actions.setUserName(userValue))
  }
  return (
    <div>
     <input type="text" value={userValue} onChange={e => setUserValue(e.target.value)}/>
     <button onClick={console.log(userValue)}>username</button>
    </div>
  )
}
export default UserForm