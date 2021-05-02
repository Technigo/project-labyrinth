import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

const ProgressBar = () => {
  const loadProgress = useSelector((store) => store.game.loadProgress)

  return (
		<div className="room-placeholder">
			<progress 
				className="nes-progress"
				value={loadProgress} 
				max="100" 
			/>
		</div>
	)
}

export default ProgressBar