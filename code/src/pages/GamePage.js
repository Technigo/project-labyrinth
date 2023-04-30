import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { postAction } from '../reducers/game'
import Map from '../components/Map'
import EndingPage from './EndingPage'

const DescriptionContainer = styled.div``

const Description = styled.div``

const OptionContainer = styled.div``

const Option = styled.div``

const GamePage = () => {
  const dispatch = useDispatch();

  const doAction = (type, direction) => {
    dispatch(postAction(type, direction));
  }

  const isEnded = useSelector((state) => state.game.response.coordinates === '1,3')
  const gameResponse = useSelector((state) => state.game.response)
  if (isEnded) { return <EndingPage /> } else {
    return (
      <>
        {gameResponse && (
          <DescriptionContainer>
            <Map />
            <Description>{gameResponse.description}</Description>
          </DescriptionContainer>)}

        {gameResponse.actions && (
          <OptionContainer>
            {gameResponse.actions.map((action) => (
              <Option>
                <p>{action.description}</p>
                <button type="button" onClick={() => doAction(action.type, action.direction)}>{action.type} {action.direction.toLowerCase()}</button>
              </Option>
            ))}
          </OptionContainer>
        )}
      </>
    )
  }
}
export default GamePage;