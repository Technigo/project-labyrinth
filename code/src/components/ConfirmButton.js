import React from 'react'
import "nes.css/css/nes.min.css"
import { useDispatch } from 'react-redux'

import game, { advance } from '../reducers/game'

const ConfirmButton = ({ chosenAction }) => {
  const dispatch = useDispatch()

  const onConfirm = () => {
    console.log(chosenAction)
    dispatch(advance(JSON.parse(chosenAction)))
  }

  return (
    <button 
			type="button" 
			className="nes-btn" 
			onClick={onConfirm}
		>
			CONFIRM
		</button>
  )
}

export default ConfirmButton