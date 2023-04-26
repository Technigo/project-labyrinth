import React from 'react'
import { useSelector } from 'react-redux'
import { Loader } from './Loader'
import { UserNameInput } from './UserNameInput'
import { GameBoard } from './GameBoard'

export const StartPage = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <div>
      {isLoading ? <Loader /> : (<> {isUserNameProvided === '' ? <UserNameInput /> : <GameBoard />} </>)}
    </div>
  )
}
