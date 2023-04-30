import React from 'react';
import PlayerInput from 'components/PlayerInput';
import { useSelector } from 'react-redux';
import GameQuestions from './GameQuestions';
import Loading from './Loading';

// StartGame uses the useSelector hook to get the username
// and loading state fields from the game state, and conditionally renders the
// Loading, GameQuestions, or PlayerInput component based on their values.
// It exports the StartGame function as the default export.

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