import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

const RoomDescription = () => {
  const room = useSelector((store) => store.game)
  
	return (
		<div>
			<p>{room.description}</p>
			{room.actions.map(action => {
				return (
					<p key={
						`${action.type} ${action.direction}`}
					>
						{`${action.direction}ward: ${action.description}`}
					</p>
				)
			})}
		</div>			
	)
}

export default RoomDescription