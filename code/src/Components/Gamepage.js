import React from 'react';
import { labyrinthMango, continueGame } from 'Reducers/labyrinth';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader';
import { GameWrapper } from '../Styles/Globalstyles';
import { DescriptionWrapper, DirectionWrapper, RestartBtn, DirectionBtn, GameEnd } from './Gamepage.styled';

export const Gamepage = () => {
  const dispatch = useDispatch()
  const description = useSelector((store) => store.labyrinth.description)
  const moves = useSelector((store) => store.labyrinth.moves)
  const loading = useSelector((store) => store.labyrinth.loading)
  const name = useSelector((store) => store.labyrinth.name)
  const history = useSelector((store) => store.labyrinth.history)

  const restartGame = () => {
    dispatch(labyrinthMango.actions.restartGame())
  }

  const goToNextStep = (e) => {
    dispatch(labyrinthMango.actions.setDirection(e.target.value))
    dispatch(continueGame())
  }

  return (
    loading ? (
      <Loader />
    ) : (
      <>
        <GameWrapper>
          <DescriptionWrapper>
            {history.lenght === 0 ? `Welcome, ${name}.` : ''}
            <p>{description}</p>
          </DescriptionWrapper>
          <DirectionWrapper id={moves.length <= 1 ? 'oneMove' : 'twoMoves'}>
            {moves && moves.map((action) => (
              <div key={action.direction}>
                <DirectionBtn
                  key={action.direction}
                  type="button"
                  id="nextBtn"
                  value={action.direction}
                  onClick={(e) => goToNextStep(e)}>
                  Go {action.direction}
                </DirectionBtn>
              </div>
            ))}
          </DirectionWrapper>
          {moves.length === 0 && (
            <GameEnd>Woho! You have made it out, {name}!</GameEnd>)}
        </GameWrapper>
        <RestartBtn onClick={restartGame}>Go back: Restart &#8634;</RestartBtn>
      </>
    )
  )
}
