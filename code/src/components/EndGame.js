import React from 'react'
import styled from 'styled-components/macro'

export const EndGame = () => {
  return (
    <Container>
      <Message>YOU DID IT!!!</Message>
      <ButtonContainer>
        <Button
          type="button">
          {/* // onClick ={() => } */}
          Try Again?
        </Button>
        <Button
          type="button">
          {/* // onClick={() => ()} */}
          EXIT
        </Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

`
const Button = styled.button`
  font-family: 'Mystery Quest', cursive;
  font-size: 16px;
  margin: 20px;
`
const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`
const Message = styled.p`
  color: #ffff00;
  font-family: 'Mystery Quest', cursive;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 0;
`
