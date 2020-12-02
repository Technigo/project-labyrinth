import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import { game } from "reducers/game";
import { Button } from "lib/Button";

// ah maybe this also can be imported via main?
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  
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
      <Title>THE LABYRINTH </Title>
      <Button onClick={onHistoryBack}>
        Go back
    </Button>
    </Wrapper>
  )

}
