import React from 'react'
import { useSelector } from 'react-redux'

import LoadingScreen from './LoadingScreen'
import GameOnScreen from './GameOnScreen'
import GameOverScreen from './GameOverScreen'
import WinnerScreen from './WinnerScreen'

const GameScreen = () => {
  const username = useSelector((store) => store.maze.username);
  const isLoading = useSelector((store) => store.maze.isLoading);
  const error = useSelector((store) => store.maze.error);
  const gameState = useSelector((store) => store.maze.gameState)

  return (
    <>
      {isLoading &&
        <LoadingScreen />
      }
      {!isLoading && (
        <>
          {error &&
            `Ooops, something went wrong: ${error}`
          }
          {username && gameState === '' && 
            <GameOnScreen />
          }
          {gameState === 'win' &&
            <WinnerScreen />
          }
          {gameState === 'lose' && 
            <GameOverScreen />
          }
        </>
      )}
    </>
  );
};

export default GameScreen;