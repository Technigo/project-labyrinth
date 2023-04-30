import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { postAction } from '../reducers/game'

const DescriptionContainer = styled.div``

const Description = styled.div``

const OptionContainer = styled.div``

const Option = styled.div``

const GamePage = () => {
  const dispatch = useDispatch();

  const doAction = (type, direction) => {
    dispatch(postAction(type, direction));
  }

  const gameResponse = useSelector((state) => state.game.response)
  return (
    <>
      {gameResponse && (
        <DescriptionContainer>
          <Description>{gameResponse.description}</Description>
        </DescriptionContainer>)}
      {gameResponse.actions && (

        <OptionContainer>
          {gameResponse.actions.map((action) => (
            <>
              <p>{action.description}</p>
              <button type="button" onClick={() => doAction(action.type, action.direction)}>{action.type} {action.direction.toLowerCase()}</button>
            </>
          ))}
          <Option />
        </OptionContainer>
      )}
    </>
  )
}

export default GamePage;