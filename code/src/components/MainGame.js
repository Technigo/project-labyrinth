import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGameSteps } from '../reducers/game'
import styled from 'styled-components/macro'

const StyledMainGame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <a id='mainGame'>
      <StyledMainGame>
        {/* Tänker att p-tagen med username dyker upp när spelet startas, och i samband med det göms input field */}
        <p>
          User:
          {username}
        </p>
        <h1>{gameObject.description}</h1>
        <p>Your coordinates: {gameObject.coordinates}</p>
        <DirectionWrapper>
          {gameObject.actions.map((action) => (
            <DirectionCard key={action.direction}>
              <p>{action.description}</p>
              {/* med knappens dispatch action skickar vi med informtion om vilken direction spelaren väljer.
          Informationen finns också med som param(eller är det ett props?) i fetchGameSteps-thunken i game.js) */}

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
    </a>
  )
}

export default MainGame
