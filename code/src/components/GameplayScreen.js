import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import game, { advance } from '../reducers/game'


const GameplayScreen = () => {
  const [chosenAction, setChosenAction] = useState({})

  const room = useSelector((store) => store.game)
  const dispatch = useDispatch()

  //console.log(room)

  const onChosenActionChange = (event) => {
    setChosenAction(event.target.value)
  }

  const onConfirm = () => {
    console.log(chosenAction)
    dispatch(advance(JSON.parse(chosenAction)))
  }

  const onRestart = () => {
    dispatch(game.actions.setUsername(""))
    dispatch(game.actions.setGameState({ 
      coordinates: 0,
      description: "",
      actions: [], 
    }))
  }

  return (
    <div className="game-wrapper">
      <div className="room-info nes-container is-dark with-title is-centered">
        <p className="title">THE LABYRINTH</p>
        {room.loadProgress < 100 
          ? <div className="room-placeholder">
              <progress 
                className="nes-progress"
                value={room.loadProgress} 
                max="100" 
              />
            </div>
          : <div>
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
        }

        
      </div>
      <div className="nes-container is-dark with-title">
        <p className="title">ACTIONS</p>
        {room.loadProgress < 100 
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
        <div className="action-btn-wrapper">
          {room.loadProgress < 100 
            ? <div />
            : room.actions.length < 1 
              ? <button 
                  type="button" 
                  className="nes-btn" 
                  onClick={onRestart}
                >
                  RESTART
                </button>
              : <button 
                  type="button" 
                  className="nes-btn" 
                  onClick={onConfirm}
                >
                  CONFIRM
                </button>
          }
        </div>
      </div>
    </div>
  )
  
}

{/* <h3 style={{color: "#f7f7f7", backgroundColor: "#212529"}}>THE LABYRINTH</h3> */}
export default GameplayScreen