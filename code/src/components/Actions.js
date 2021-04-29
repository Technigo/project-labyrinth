import React, {useState} from 'react'
import "nes.css/css/nes.min.css"
import { useDispatch, useSelector } from 'react-redux'

import game, { advance } from '../reducers/game'
import ConfirmButton from './ConfirmButton'
import RestartButton from './RestartButton'

const Actions = () => {
  const [chosenAction, setChosenAction] = useState({})
  const room = useSelector((store) => store.game)
  const loadProgress = useSelector((store) => store.game.loadProgress)

  const onChosenActionChange = (event) => {
    setChosenAction(event.target.value)
  }
  
  return (
    <div className="nes-container is-dark with-title">
      <p className="title">ACTIONS</p>
      {loadProgress < 100 
        ? <p className="room-placeholder">loading...</p>
        : room.actions.map(action => {
            let actionLabel = action.type
            switch (action.type) {
              case "move":
                actionLabel = "Go"
              break
            }
            return (
              <label key={`${actionLabel} ${action.direction}`}>
                <input 
                  type="radio" 
                  className="nes-radio is-dark" 
                  name="answer-dark"
                  value={JSON.stringify(action)}
                  onChange={onChosenActionChange}
                />
                <span>{`${actionLabel} ${action.direction}`}</span>
              </label>
            )
          })
      }
      <div className="confirm-btn-wrapper">
        {loadProgress < 100 
          ? <div />
          : <ConfirmButton chosenAction={chosenAction} />
        }
      </div>
			<div className="restart-btn-wrapper">
				<RestartButton />
			</div>
    </div>
  )
}

export default Actions

