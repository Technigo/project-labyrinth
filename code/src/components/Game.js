import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTwo, gameFetch } from 'reducers/gameFetch'
import { LevelCard, Description, DirectionButton, Background } from 'lib/Level'
import { StarterPage } from './StarterPage'

export const Game = () => {
  const gameData = useSelector((store) => store.gameFetch)
  const gameActions = useSelector((store) => store.gameFetch.actions)
  const coordinates = useSelector((store) => store.gameFetch.coordinates)
  console.log(coordinates);

  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };
  /*   const CoordinateList = {
    level1: '0,0',
    level2: '0,1',
    level3: '1,1',
    level4: '1,2',
    level5: '0,2',
    level6: '0,3',
    level7: '1,3'
  }; */

  const onLoadImages = () => {
    if (coordinates === '') {
      return '.images/start.png'
    } else if (coordinates === '0,0') {
      return '.images/level1.png'
    } else if (coordinates === '0,1') {
      return '.images/level2.png'
    }
  }

  return (
    <Background style={{ backgroundImage: `url(${onLoadImages})` }}>
      <LevelCard>
        {coordinates === '' && (<StarterPage />)}
        {coordinates === '1,3' && (<button type="button" onClick={onRestartButton}>Restart</button>)}
        <p>{gameData.description}</p>
        {gameActions && gameActions.map((item) => {
          return (
            <div key={item.direction}>
              <Description>{item.description}</Description>
              <DirectionButton
                direction={item.direction}
                type="button"
                onClick={() => dispatch(fetchTwo(item.direction))}>
                {item.direction}
              </DirectionButton>
            </div>
          );
        })}
      </LevelCard>
    </Background>
  )
}

