import React from 'react'
import "nes.css/css/nes.min.css"
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

import RoomDescription from './RoomDescription'
import Map from './Map'
import Button from './Button'

const WinScreen = () => {

	const dispatch = useDispatch()
	const onRestart = () => {
		dispatch(game.actions.reset())
	}

	return (
		<div className="win-screen-wrapper">
			<div className="nes-container is-dark with-title is-centered">
				<p className="title">THE END?</p>
        <RoomDescription />
        <div className="trophy-wrapper">
          <i className="nes-icon trophy is-large"/>
        </div>
        <p className="your-journey">Your Journey</p>
        <Map />
				<Button
					buttonStyle="nes-btn is-error"
					onClick={onRestart}
					buttonText="Restart"  
				/>
			</div>
		</div>
	)
}

export default WinScreen