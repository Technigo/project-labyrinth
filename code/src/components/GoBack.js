import React from 'react'
import { useDispatch } from 'react-redux'
import labyrinth from '../reducers/labyrinth'


const GoBack= ()=>{
  const dispatch = useDispatch()
  const onPreviousStep = ()=>{
    dispatch(labyrinth.actions.setPreviousStep())
    document.getElementById("textAnimation").innerHTML =""
  }

  return (
    <button className="go-back" onClick={onPreviousStep}> Go Back</button>
  )
}
export default GoBack;