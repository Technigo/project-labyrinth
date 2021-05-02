import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import gameFetch from 'reducers/gameFetch'

const End = ({ gameDescription }) => {
  const userName = useSelector((store) => store.gameFetch.userName)

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(gameFetch.actions.setName(""))
  }

  return (
    <div>
      <h1>Well done {userName}, you made it to the end!</h1>
      <p>{gameDescription}</p>
      <button onClick={onRestart}>Restart the game</button>
    </div>
  )
}

export default End;