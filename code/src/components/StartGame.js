import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ui } from 'reducers/ui'
import { game } from 'reducers/game'

import { fetchMove } from 'reducers/game'

export const StartGame = () => {
    const startPosition = useSelector( store => store.game);
    const dispatch = useDispatch()

    console.log(startPosition)

    const handleFirstMove = (type, direction) => {
        dispatch(fetchMove(startPosition.user.username, type, direction))
        console.log(startPosition.currentPosition.actions)
    }

    return (
        <>
        {startPosition.currentPosition.description && (
        <div>
            <p> Description: {startPosition.currentPosition.description}</p>
            <p> Coordinates: {startPosition.currentPosition.coordinates}</p>
              <div>{startPosition.currentPosition.actions.map((item, index) => (
                    <button type='button' onClick={() => handleFirstMove(item.type, item.direction)}>{item.direction}</button>
              ))}
              {startPosition.currentPosition.coordinates === "1,3" && <button type='button' onClick={() => {dispatch(ui.actions.restart())
             dispatch(game.actions.restart())}
            }>Restart game</button>}
              </div>  
        </div>)}</>
        // <div>
        //     {startPosition.position.map((item, index) => (
        //     <>
        //     <p key={index}> Description: {item.description}</p>
        //     <p key={index}> Coordinates: {item.coordinates}</p>
        //       <div>{item.actions.map((item, index) => (
        //             <button type='button' onClick={() => handleFirstMove(item.type, item.direction)}>{item.direction}</button>
        //         ))}</div>  
        //     </>))}
        // </div>
     
    )

}