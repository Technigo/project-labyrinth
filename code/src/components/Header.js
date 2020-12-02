import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import { game } from "reducers/game";
import { Button } from "lib/Button";

const Wrapper = styled.section`
  display: flex
  
`

const Title = styled.h1`

`

export const Header = () => {
  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  }

  return (
    <Wrapper>
      <Title>ADVENTURE TIME</Title>
      <Button onClick={onHistoryBack}>
        Go back
    </Button>
    </Wrapper>
  )

}
