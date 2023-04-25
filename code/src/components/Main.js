import React from 'react'
import { useSelector } from 'react-redux'
import Location from './Location'
import { Start } from './Start'

const Main = () => {
  const username = useSelector((store) => store.maze.username)
  return (
    <div>
      {username === '' ? <Start /> : <Location />}
    </div>
  )
}

export default Main