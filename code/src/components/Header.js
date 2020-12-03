import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import { game } from "reducers/game";
import { Button } from "lib/Button";

// ah maybe this also can be imported via main?
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 20px;
  justify-items: flex-start;
  margin-bottom: 30px;
`

const Title = styled.h1`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 34px;
  }

`
const headerBtn = true

export const Header = () => {
  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  }

  return (
    <Wrapper>
      <Title>THE LABYRINTH </Title>
      <Button headerBtn={headerBtn} onClick={onHistoryBack}>
        Go back
    </Button>
    </Wrapper>
  )

}
