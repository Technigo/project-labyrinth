import React from 'react'
import { useSelector } from 'react-redux';
// import { game } from 'reducers/game';
import StartingPage from './StartingPage'
import GamePage from './GamePage';

const Main = () => {
  // const dispatch = useDispatch()

  // dispatch(postUsername())

  const username = useSelector((state) => state.game.username)
  console.log(`username: ${username}`)

  return (username ? (<GamePage />) : (<StartingPage />)
  );
}

export default Main;