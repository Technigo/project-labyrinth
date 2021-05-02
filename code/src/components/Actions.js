import React, {useState} from 'react'
import "nes.css/css/nes.min.css"
import { useSelector, useDispatch } from 'react-redux'

import game, { advance } from '../reducers/game'

import Button from './Button'

const Actions = () => {
  const [chosenAction, setChosenAction] = useState({})
  const room = useSelector((store) => store.game)
  const loadProgress = useSelector((store) => store.game.loadProgress)

  const onChosenActionChange = (event) => {
    setChosenAction(event.target.value)
  }

  const getActionLabel = (type) => {
    let newLabel = ""
    switch (type) {
      case "move":
        newLabel = "Go"
        break
      default:
        newLabel = type
        break
    }
    return newLabel
  }

  const dispatch = useDispatch()

  const onConfirm = () => {
    setChosenAction({})
    dispatch(advance(JSON.parse(chosenAction)))
  }

  const onRestart = () => {
    dispatch(game.actions.reset())
  }
  
  return (
    <div className="nes-container is-dark with-title">
      <p className="title">ACTIONS</p>
      {loadProgress < 100 
        ? <p className="room-placeholder">loading...</p>
        : room.coordinates === "1,3" 
          ? <div></div>
          : room.actions.map(action => {
            let actionLabel = getActionLabel(action.type)
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
        {loadProgress < 100 || room.actions.length < 1
          ? <div />
          : <Button
            buttonStyle="nes-btn"
            onClick={onConfirm}
            buttonText="Confirm"
            disabled={Object.keys(chosenAction).length === 0 ? true : false}
            disabledStyle={"nes-btn is-disabled"} 
          />
        }
      </div>
			<div className="restart-btn-wrapper">
				<Button 
          buttonStyle="nes-btn is-error"
          onClick={onRestart}
          buttonText="Restart" 
        />
			</div>
    </div>
  )
}

export default Actions