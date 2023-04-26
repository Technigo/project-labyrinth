import React from 'react';
import PlayerInput from 'components/PlayerInput';
import { useSelector } from 'react-redux';
import GameQuestions from './GameQuestions';
import Loading from './Loading';

const StartGame = () => {
  const username = useSelector((store) => store.games.username)
  const loading = useSelector((store) => store.games.loading)

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          {username
            ? <GameQuestions />
            : <PlayerInput />}
        </div>
      )}
    </>
  )
}

export default StartGame;