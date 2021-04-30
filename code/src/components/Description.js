import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import games, { generateMove } from '../reducers/games'
import ActionHistory from './ActionHistory'

const Description = () => {
  const userName = useSelector(store => store.games.username)
  const description = useSelector(store => store.games.description.description)
  const userActions = useSelector(store => store.games.description.actions)
  const history = useSelector(store => store.games.history)
  const pilar = useSelector(store => store.games.pilar)
  console.log(pilar)

  const [dir, setDir] = useState("")

  const dispatch = useDispatch()

  //console.log(pilar.north)

  //console.log(history) 

  console.log(dir)


  //console.log(userName)
 
 
    switch (pilar) {
      case "East":
        return(
          setDir("⇨")
        )
        break;
      case "West":
        return (
          setDir("⇦") 
        )
      break;
      case "North":
        return (
          setDir("⇧")
        )
        break;
        case "South":
        return (
          setDir("⇩")
        )
      break;
      default:
        break;
    }
  
  return (
    <div>
      <p>{description}</p>
      <div className='action'>
      {userActions.map(action=> (
        <div className='action-container'>
          <div className='action-content'>
            <p>{action.description}</p>
          </div>
          <div className='action-btn'>
            <button 
              className='nes-btn is-warning'
              type='button'
              onClick={() => {
                dispatch(generateMove(userName, action.direction))
                //onEmojiChange(dir)
              }}  //action.direction+
            >
              {action.direction}
            </button>
          </div>
        </div>
          ))}
      </div>
        {history.length > 0 ? <ActionHistory /> : null}
    </div>
  )
}

export default Description

