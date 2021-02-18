import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { LoadingIndicator } from 'components/LoadingIndicator'
import { handleMove } from '../reducers/gameReducer'
import { History } from './History'
import { EndGame } from './EndGame'
import brImage from '../assets/brImage1.jpg'

export const Step = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector((store) => store.gameReducer.currentStep)
  return (
    <Container imgUrl={brImage}>
      <LoadingIndicator />
      <FixedContent>
        <Section>
          <Description>{currentStep.data.description}</Description>
          <Location><span aria-label="location">📍</span>Your location: {currentStep.data.coordinates}</Location>
        </Section>
        <StepContainer>
          {currentStep.data.actions.map((action) => (
            <Display key={action.direction}>
              <Button
                type="button"
                onClick={() => dispatch(handleMove(action.direction))}>
                Go {action.direction}
              </Button>
              <ActionDes>{action.description}</ActionDes>
            </Display>
          ))}
        </StepContainer>
      </FixedContent>
      {currentStep.data.coordinates === '1,3'
      && <EndGame />}
      <History />
    </Container>
  )
}

const Container = styled.main`
  align-items: center;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  width: 100vw;
`
const Display = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`
const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
  height: 30%;
  width: 100%;
`
const StepContainer = styled.div`
  align-items: baseline;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`
const FixedContent = styled.div`
  display: grid;
  font-family: 'Mystery Quest', cursive;
  grid-template-rows: auto;
`
const Description = styled.p`
  background-color: rgba(0,0,0, 0.7);
  font-size: 27px;
  margin: 0;
  padding: 10px;
  text-align: center;
`
const Location = styled.p`
  font-size: 20px;
  justify-self: center;
  margin: 0;
`
const ActionDes = styled.p`
  flex-wrap: wrap;
  font-size: 17px;
  margin: 0;
  transition-timing-function: ease-in-out;
  @media (any-hover: hover) {
    visibility: hidden;
  }
`
const Button = styled.button`
  background-color: #50055E;
  color: #ffffff;
  display: block;
  font-family: 'Mystery Quest', cursive;
  font-size: 18px;
  margin-bottom: 30px;
  @media (any-hover: hover) {
    &:hover + ${ActionDes} {
      visibility: visible;
    }
  }
`
