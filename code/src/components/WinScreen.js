import React from 'react'
import "nes.css/css/nes.min.css"
import RoomDescription from './RoomDescription'
import Map from './Map'
import RestartButton from './RestartButton'

const WinScreen = () => {



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
				<RestartButton />
			</div>
		</div>
	)
}

export default WinScreen