import React from 'react'
import { useSelector } from 'react-redux'

// import { game } from '../reducers/game'

// import { GamePage } from 'components/GamePage'
// import { GameEndPage } from 'components/GameEndPage'

export const GameStartPage = () => {
  //   const dispatch = useDispatch()
  const gameStatus = useSelector((store) => store.game.gameStatus)
  const username = useSelector((store) => store.game.username)
  const actions = useSelector(
    (store) => store.game.gameStatus.gameStatus.actions
  )
  console.log('Spelet har startat!')
  console.log(actions)

  //   const onClickDirection = () => {
  //     dispatch(game.actions.clickDirection(location))
  //     dispatch(gamePlay(username))
  //   }
  return (
    <>
      <h1>Hello {username.username}!</h1>
      <h3>{gameStatus.gameStatus.description}</h3>
      {actions.map((item) => (
        <div key={item.description}>
          <h3>{item.description}</h3>
          <button
            onClick={() =>
              //   dispatch(generateNextMove(username.username, item.direction))
              console.log(
                'username: ',
                username.username,
                'direction: ',
                item.direction
              )
            }>
            {item.direction}
          </button>
        </div>
      ))}
    </>
  )
}
export default GameStartPage
