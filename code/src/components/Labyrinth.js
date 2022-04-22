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

  const dispatch = useDispatch()

  // if (isLoading === true) {
  //   return <div>isLoading</div>
  // }

  return (
    <>
      <Description>
        <h1>{description}</h1>
      </Description>

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
            <InputButton onClick={() => dispatch(fetchSteps(action.direction))}>
              {action.direction}
            </InputButton>
          </ButtonContainer>
        ))}
    </>
  )
}

const Description = styled.div`
  h1 {
    font-size: 25px;
    text-shadow: 1px 1px black;
  }
`

const DescriptionText = styled.div`
  margin: 20px 20px;
  padding: 10px;
  background: black;
`

const YouLookToThe = styled.div`
  display: block;
`

const DirectionSpan = styled.div`
  font-size: 20px;
`

const InputButton = styled.button`
  padding: 10px 20px;
  padding: 8px 18px;
  background: black;
  color: white;
  border-radius: 2px;
  border: 1px solid black !important;
  cursor: pointer;
  font-family: Bayon;
  letter-spacing: 2px;
  font-size: 18px;
`
const ButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`
