import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const History = () => {
  const historySteps = useSelector((store) => store.gameReducer.history)
  console.log(historySteps, 'historySteps')
  return (
    <>
      {historySteps.length > 0 && (
        <Container>
          <Title>Your previous moves</Title>
          <Content>
            {
              historySteps.map((step) => (
                <Wrapper key={step.coordinates}>
                  <Location> <span aria-label="location">📍</span>Location: {step.coordinates}</Location>
                  <Description>{step.description}</Description>
                </Wrapper>
              ))
            }
          </Content>
        </Container>
      )}
    </>
  )
}

const Container = styled.main`
  display: flex;
  font-size: 16px;
  flex-direction: column;
  max-height: 30%;
  padding: 10px;

`

const Title = styled.h2`
  color: #ffff00;
  font-family: 'Mystery Quest', cursive;
  margin: 0;
  text-align: center;
`
const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  height: 30vh;
  overflow: auto;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Sansita Swashed', cursive;
  font-size: 18px;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
`
const Description = styled.p`
  margin: 0;
`
const Location = styled.p`
  margin: 0;
`