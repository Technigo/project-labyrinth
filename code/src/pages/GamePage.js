import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { postAction } from '../reducers/game'
import Map from '../components/Map'
import EndingPage from './EndingPage'
import { Button } from '../lib/Button'

const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-width: 360px;
  max-width: 550px;
  padding: 5px;
  `

const DescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const MapContainer = styled.div`
  width: 110px;
  height: 110px;
  border: purple 2px dotted;
  margin-right: 7px;
`

const Description = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
`

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 490px) {
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }
`

const Option = styled.div`
  border: var(--blue) 4px dashed;
  margin-bottom: 15px;
  background: var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  @media (min-width: 490px) {
    width: 100%;
    min-width: 215px;
    justify-content: space-between;
  }
`

const OptionText = styled.p`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Courier New', Courier, monospace;
  @media (min-width: 490px) {
    margin-bottom: 25px;
  }
`

const GamePage = () => {
  const dispatch = useDispatch();

  const doAction = (type, direction) => {
    dispatch(postAction(type, direction));
  }

  const isEnded = useSelector((state) => state.game.response.coordinates === '1,3')
  const gameResponse = useSelector((state) => state.game.response)

  if (isEnded) { return <EndingPage /> } else {
    return (
      <GamePageContainer>
        {gameResponse && (
          <DescriptionContainer>
            <MapContainer>
              <Map />
            </MapContainer>
            <Description>{gameResponse.description}</Description>
          </DescriptionContainer>)}

        {gameResponse.actions && (
          <OptionContainer>
            {gameResponse.actions.map((action) => (
              <Option>
                <OptionText>{action.description}</OptionText>
                <Button type="button" onClick={() => doAction(action.type, action.direction)}>{action.type} {action.direction.toLowerCase()}</Button>
              </Option>
            ))}
          </OptionContainer>
        )}
      </GamePageContainer>
    )
  }
}

export default GamePage;