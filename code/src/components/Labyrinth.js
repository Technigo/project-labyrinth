import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import steps, { fetchSteps } from '../reducers/steps'
import styled from 'styled-components'

import StartingPage from './StartingPage'
import styledComponents from 'styled-components'

export const Labyrinth = () => {
  const { description, actions } = useSelector(
    (store) => store.steps.currentStep
  )
  const isLoading = useSelector((store) => store.steps.loading)
  const dispatch = useDispatch()

  if (isLoading === true) {
    return <div>isLoading</div>
  }

  return (
    <>
      <div>
        <h1>Explorer: {description}</h1>
      </div>

      {actions.length === 0 && <h2>Yay, you made it out!</h2>}

      {actions.length > 0 &&
        actions.map((action) => (
          <ButtonContainer key={action.direction}>
            <DescriptionText>
              <YouLookToThe>
                You look to the :
                <DirectionSpan>{action.direction}</DirectionSpan>
              </YouLookToThe>
              {action.description}
            </DescriptionText>
            <button onClick={() => dispatch(fetchSteps(action.direction))}>
              {action.direction}
            </button>
          </ButtonContainer>
        ))}
    </>
  )
}

const DescriptionText = styled.div``

const YouLookToThe = styled.div``

const DirectionSpan = styled.div``

const InputButton = styled.div`
  background-color: blueviolet;
`
const ButtonContainer = styled.button``

const UserActions = styled.div`
  background-color: green;
`
