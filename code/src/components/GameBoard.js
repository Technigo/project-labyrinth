import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components/macro';
import { Button } from 'lib/Button';
import Map from './Map';

export const GameBoard = () => {
  const { description, actions, coordinates } = useSelector((store) => store.game.position)
  const dispatch = useDispatch()
  const username = useSelector((store) => store.game.username)

  const onDirectionBtnClick = (direction) => {
    dispatch(nextMove(direction))
  }

  const onRestartBtnClick = () => {
    return (
      window.location.reload()
    )
  }

  return (
    <ContentContainer>
      <GameBoardContainer>
        <PlayerBar>
          <Button type="button" buttonText="RestartBtn" onClick={onRestartBtnClick} />
          <h2><span>const</span> Player <span>=</span> {username}</h2>
        </PlayerBar>
        <Prompt>
          <h2>prompt()</h2>
        </Prompt>
        <PositionDescription>
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#BBBBBB"
            text={description}
            typeSpeed={70}
            hideCursorAfterText="true" />
        </PositionDescription>
        <ActionsContainer>
          {actions.map((singleAction) => (
            <SingleAction>
              <p>{singleAction.description}</p>
              <Button
                buttonText={`Go ${singleAction.direction}`}
                onClick={() => onDirectionBtnClick(singleAction.direction)} />
            </SingleAction>
          ))}
        </ActionsContainer>
      </GameBoardContainer>
      <Map coordinates={coordinates} />
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 668px) {
      display: flex;
      flex-direction: row;
    }
`

const GameBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;
`

const PlayerBar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    h2 {
        font-size: 14px;
        color: rgb(130, 216, 96);
    }
    span {
      color: rgb(83, 199, 210);
    }
`
const Prompt = styled.p`
  font-size: 16px;
  color: rgb(164, 145, 230);
  padding: 10px;
`

const PositionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70px;
    border: 2px dashed rgb(164, 145, 230);
    border-radius: 3px;
    padding: 10px;
    margin: 0 10px 10px 10px;
    h1 {
        font-size: 16px;
        color: rgb(164, 145, 230);
    }
`

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const SingleAction = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0 5px 0;
    p {
        font-size: 16px;
        margin: 15px 5px 15px 0;
        color: rgb(239, 92, 116);
    }
    /*button {
      align-self: center;
      margin-left: 10px;
    }*/
`