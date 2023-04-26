import React from 'react'
import { useSelector } from 'react-redux'
import { Loader } from './Loader'
import { UserNameInput } from './UserNameInput'

export const StartPage = () => {
  const loading = useSelector((store) => store.game.loading)
  const position = useSelector((store) => store.game.position)
  if (loading) {
    return <Loader />
  } else if (position !== '') {
    return ('')
  } else {
    return <UserNameInput />
  }
}