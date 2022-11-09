// StartPage, addUSerNameinput
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGame, game } from 'reducers/game'

const StartPage = () => {
  const [name, setUserName] = useState('')
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author)

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUserName(name));
    dispatch(fetchGame());
    console.log(name)
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <p>Labyrinth Game! So So fun!</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setUserName(event.target.value)} />
      <button type="submit" onClick={onFormSubmit}>Start the game!</button>
    </form>
  )
}
export default StartPage;