/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game, fetchGameSteps } from 'reducers/game';
import Lottie from 'lottie-react';
import { Button, DirectionButton } from './styled-components/BtnStyles';
import { Description, StepDescription, Title, User, UserInput } from './styled-components/StyledTexts';
import { OuterWrapper, InnerWrapper, TheEndWrapper, CongratuationWrap } from './styled-components/StyledWrappers'
import animationData from '../lotties/path.json'

const Games = () => {
  const { description, actions } = useSelector((store) => store.game.stage)
  console.log('description', description)
  console.log('actions', actions)
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.game.username);

  const onNextAction = (type, direction) => {
    dispatch(fetchGameSteps(type, direction));
  }

  const onGameRestart = () => {
    dispatch(game.actions.setRestartGame())
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <UserInput><User>dear,</User> {userName}</UserInput>
        <Description>{description}</Description>
        {actions && actions.map((action) => {
          return (
            <div key={action.description}>
              <StepDescription>{action.description}</StepDescription>
              <DirectionButton type="button" onClick={() => onNextAction(action.type, action.direction)}>
                <span>
                    Go {''}
                  {action.direction
                    + (action.direction === 'North'
                      ? ' ▲'
                      : action.direction === 'South'
                        ? ' ▼'
                        : action.direction === 'West'
                          ? ' ◀︎'
                          : action.direction === 'East'
                            ? ' ►'
                            : '')}
                </span>
              </DirectionButton>
            </div>
          )
        })}
        {actions?.length === 0 && (
          <TheEndWrapper>
            <Title>THE END</Title>
            <CongratuationWrap>
              <p>Congratulations</p>
              <p>You leveled up, mentally</p>
            </CongratuationWrap>
            <Button type="button" onClick={onGameRestart}>Restart</Button>
            <Lottie
              animationData={animationData}
              options={defaultOptions}
              height={100}
              width={100} />
          </TheEndWrapper>
        )}
      </InnerWrapper>
    </OuterWrapper>
  )
};

export default Games;