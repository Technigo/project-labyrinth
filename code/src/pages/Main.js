import React from 'react'
// import { useDispatch } from 'react-redux';
// import { postUsername, game } from 'reducers/game';
import { useSelector } from 'react-redux'
import StartingPage from './StartingPage'
import LoadingPage from './LoadingPage'
import GamePage from './GamePage'

const Main = () => {
  const isUserNameSubmitted = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.ui.loading)

  return (
    <section>
      {isLoading ? <LoadingPage /> : (<> {isUserNameSubmitted === '' ? <StartingPage /> : <GamePage />}  </>)}
    </section>
  );
}

export default Main;