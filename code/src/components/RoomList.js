import React from 'react'
import { useSelector } from 'react-redux'

import {game} from '../reducers/game'

import { StartRoom } from './StartRoom'
import { GameRoom } from './GameRoom'

export const RoomList = () => { 

  return (
    <>
    <StartRoom />
    <GameRoom />
    </>
  )
}







