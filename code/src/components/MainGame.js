import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGameSteps } from '../reducers/game'
import LoadingSpinner from './LoadingSpinner'
import styled from 'styled-components/macro'

const StyledMainGame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: #111;
  background-image: radial-gradient(#333, #111);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  text-align: center;
`

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 800px;
`

const DirectionCard = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DirectionButton = styled.button`
  width: 80px;
  padding: 7px;
  text-align: center;
`

const MainGame = () => {
  const gameObject = useSelector((store) => store.game.gameObject)
  const username = useSelector((store) => store.game.username)
  console.log(gameObject)

  const dispatch = useDispatch()

  return (
    <StyledMainGame>
      <LoadingSpinner />
      <p>
        User:
        {username}
      </p>
      <h2>{gameObject.description}</h2>

      <DirectionWrapper>
        {gameObject.actions.map((action) => (
          <DirectionCard key={action.direction}>
            <p>{action.description}</p>

            <DirectionButton
              onClick={() =>
                dispatch(fetchGameSteps({ direction: action.direction }))
              }
            >
              Go {action.direction}
            </DirectionButton>
          </DirectionCard>
        ))}
      </DirectionWrapper>
    </StyledMainGame>
  )
}

export default MainGame
