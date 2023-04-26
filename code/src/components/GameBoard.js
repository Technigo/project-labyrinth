import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';
import TypeWriterEffect from 'react-typewriter-effect';
import styled from 'styled-components/macro';
import { Button } from 'lib/Button';

export const GameBoard = () => {
  const { description, actions } = useSelector((store) => store.game.position)
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
    <GameBoardContainer>
      <HeaderBar>
        <Button type="button" buttonText="Restart" onClick={onRestartBtnClick} />
        <h2><span>const</span> Player: {username}</h2>
      </HeaderBar>
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
              buttonText={singleAction.direction}
              onClick={() => onDirectionBtnClick(singleAction.direction)} />
          </SingleAction>
        ))}
      </ActionsContainer>
    </GameBoardContainer>
  )
}

const GameBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 80px;
    justify-self: center;
    width: 90%;
    max-width: 300px;
    margin-bottom: 20px;
`

const HeaderBar = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    padding: 10px;
    h2 {
        font-size: 14px;
        color: rgb(130, 216, 96);
    }
    span {
      color: rgb(83, 199, 210);
    }
`

const PositionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    margin-bottom: 30px;
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
        margin-bottom: 10px;
        color: rgb(239, 92, 116);
    }
`