import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import games, { GenerateQuestion } from '../reducers/games';
import { DirectionButton, GoBackButton, ResetButton, StyledIcon } from './GlobalStyling';
import { EndGame } from './EndGame';
import { DescriptionText, DirectionText, DirectionWrapper, StyledContainer, Wrapper } from './GameQuestionsStyling';

const GameQuestions = () => {
  const description = useSelector((store) => store.games.description);
  const moves = useSelector((store) => store.games.moves);
  const history = useSelector((store) => store.games.history);
  const coordinates = useSelector((store) => store.games.coordinates);

  const dispatch = useDispatch();

  const onChooseDirection = (event) => {
    dispatch(games.actions.setDirection(event.target.value));
    dispatch(GenerateQuestion());
  };

  const onRestartButton = () => {
    dispatch(games.actions.setUserName(''));
    window.location.reload();
  };

  const goToPreviousMove = () => {
    dispatch(games.actions.setPreviousMove());
  };

  return (
    <StyledContainer>
      <Wrapper>
        {history.length > 0 && (
          <GoBackButton type="button" onClick={goToPreviousMove}>
            <StyledIcon icon={faArrowLeftLong} />
            Go back
          </GoBackButton>
        )}
        <div>
          <DescriptionText>{description}</DescriptionText>
          {moves && moves.map((move) => (
            <DirectionWrapper key={move.description}>
              <DirectionText>{move.description}</DirectionText>
              <DirectionButton
                type="button"
                value={move.direction}
                onClick={(event) => onChooseDirection(event)}>
              Go {move.direction}
              </DirectionButton>
            </DirectionWrapper>
          ))}
          {coordinates === '1,3' ? <EndGame /> : null}
        </div>
        <ResetButton type="button" onClick={onRestartButton}>Reset
        </ResetButton>
      </Wrapper>
    </StyledContainer>
  );
};

export default GameQuestions;