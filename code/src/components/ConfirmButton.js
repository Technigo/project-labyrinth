import React from 'react'
import "nes.css/css/nes.min.css"
import { useDispatch } from 'react-redux'

import { advance } from '../reducers/game'

const ConfirmButton = ({ chosenAction }) => {
  const dispatch = useDispatch()

  const onConfirm = () => {
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