import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, gameStart } from '../reducers/game'

import { GameStartPage } from 'components/GameStartPage'
// import { GamePage } from 'components/GamePage'
// import { GameEndPage } from 'components/GameEndPage'

export const FirstPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const gameStatus = useSelector((store) => store.game.gameStatus)

  const onSubmitUsername = () => {
    dispatch(game.actions.submitUsername(username))
    dispatch(gameStart(username))
  }

  if (gameStatus) {
    return <GameStartPage />
  }

  // if (location !== '' && location !== '0,0') {
  //   return <GamePage />
  // }

  // if (location === '3,1') {
  //   return <GameEndPage />
  // }

  return (
    <>
      <h1>Are you ready to trust the process?</h1>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button disabled={username === ''} onClick={onSubmitUsername}>
        Submit
      </button>
    </>
  )
}
export default FirstPage
