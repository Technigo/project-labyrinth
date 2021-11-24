import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, gamePlay } from '../reducers/game'
import Compass from './Compass'

export const GameStartPage = () => {
  const dispatch = useDispatch()
  // const directionComp = useSelector(
  //   (store) => store.game.gameStatus.actions.direction
  // )
  const gameStatus = useSelector((store) => store.game.gameStatus)
  const username = useSelector((store) => store.game.username)
  const actions = useSelector((store) => store.game.gameStatus.actions)
  // const { coordinates } = useSelector((store) => store.game.gameStatus)
  // const prevDir = useSelector((store) => store.game.history)

  const compassDirection = () =>
    actions.map((item) => {
      if (item.direction === 'East') {
        return "url('./assets/comp_east.svg')"
      } else if (item.direction === 'West') {
        return "url('./assets/comp_west.svg')"
      } else if (item.direction === 'South') {
        return "url('./assets/comp_south.svg')"
      } else {
        return "url('./assets/comp_north.svg')"
      }

      // return <h1>{item.direction}</h1>
    })

  // const compassDirection = () => {
  //   switch (gameStatus.coordinates) {
  //     case '0,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '1,1':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '2,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '3,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '1,0':
  //       "url('./assets/comp_west.svg')"
  //       break
  //     case '0,1':
  //       "url('./assets/comp_east.svg')"
  //       break
  //     case '3,1':
  //       "url('./assets/comp_east.svg')"
  //       break
  //     default:
  //       break
  //   }
  //   // if (
  //   //   gameStatus.coordinates === '0,0' ||
  //   //   gameStatus.coordinates === '1,1' ||
  //   //   gameStatus.coordinates === '2,0' ||
  //   //   gameStatus.coordinates === '3,0'
  //   // ) {
  //   //   return "url('./assets/comp_north.svg')"
  //   // } else if (gameStatus.coordinates === '1,0') {
  //   //   return "url('./assets/comp_west.svg')"
  //   // } else if (
  //   //   gameStatus.coordinates === '0,1' ||
  //   //   gameStatus.coordinates === '3,1'
  //   // ) {
  //   //   return "url('./assets/comp_east.svg')"
  //   // }

  //   // return <h1>{item.direction}</h1>
  // }
  // const imageUrl = {
  //   '0,0': "url('./assets/comp_north.svg')",
  //   '1,1': "url('./assets/comp_north.svg')",
  //   '2,0': "url('./assets/comp_north.svg')",
  //   '3,0': "url('./assets/comp_north.svg')",
  //   '1,0': "url('./assets/comp_west.svg')",
  //   '0,1': "url('./assets/comp_east.svg')",
  //   '3,1': "url('./assets/comp_east.svg')"
  // }

  // console.log(item.direction))
  return (
    <>
      {actions.length === 1 && <h1>Hello {username.username}!</h1>}
      {/* {actions && compassDirection()} */}
      {actions && console.log('actions: ', actions, 'length: ', actions.length)}
      <Compass image={compassDirection()} />
      {/* <Compass image={imageUrl[coordinates]} /> */}
      <h3>{gameStatus.description}</h3>

      {actions.map((item) => (
        <div key={item.description}>
          <h3>{item.description}</h3>
          <button
            value={item.direction}
            onClick={() => dispatch(gamePlay(username, item.direction))}>
            {item.direction}
          </button>
        </div>
      ))}
      {actions.length === 0 && (
        <button onClick={() => dispatch(game.actions.restart())}>
          Restart game?
        </button>
      )}
    </>
  )
}
export default GameStartPage
