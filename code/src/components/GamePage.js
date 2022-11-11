import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DuckContainer, Button } from 'styled-components/GlobalStyles';
import { generateMoves } from 'reducer/game';
import styled from 'styled-components';
import { DucklingHeader } from './DucklingHeader';
import { EndingPage } from './EndingPage';

export const GamePage = () => {
  const { description, actions } = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch();

  const username = useSelector((store) => store.game.username);

  return (
    <section>
      <DuckContainer>
        <DucklingHeader />
        <HeaderText>
          {actions.length > 0 ? (
            <p>We don&apos;t have
          a lot of time. Hurry up, {username}!
            </p>
          ) : (<p>Thank you for your help, {username}. You&apos;re truly my saviour</p>)}
        </HeaderText>

      </DuckContainer>
      <DescriptionWrapper>
        <p>
          &quot;{description}&quot;
        </p>
      </DescriptionWrapper>
      {actions.length > 0 && <Wrapper><p>CHOOSE YOUR NEXT STEP: </p></Wrapper>}
      <div>
        {actions.length > 0
        && actions.map((action) => (
          <OptionWrapper key={action.direction}>
            <p>{action.description}</p>
            <Button
              type="button"
              onClick={() => dispatch(generateMoves(action.direction))}>{action.direction}
            </Button>
          </OptionWrapper>
        ))}
        {actions.length === 0 && <EndingPage />}
      </div>
    </section>
  )
}

const HeaderText = styled.div`
  margin: 0;
  width: 100%;

  p{
    font-size: 0.6rem;

  @media (min-width: 668px){
      font-size: 1rem;
  }
  }
`
const DescriptionWrapper = styled.div`
  width: 80%;
  padding: 20px;
  margin: 2em auto;
  background-color: var(--orange);
  box-shadow:
    -5px 0 0 0 var(--lightYellow),
    5px 0 0 0 var(--lightYellow),
    0 -5px 0 0 var(--lightYellow),
    0 5px 0 0 var(--lightYellow);

  p{
    text-align: center;
  }
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightYellow);
  box-shadow:   
    -5px 0 0 0 var(--orange),
    5px 0 0 0 var(--orange),
    0 -5px 0 0 var(--orange),
    0 5px 0 0 var(--orange);

  width: 80%;
  padding: 5px 20px;
  margin: 2em auto;

  @media (min-width: 668px){
    padding: 20px;
  }
`

const Wrapper = styled.div`
  width: 80%;
  margin: 2em auto;
`