import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateOptions } from 'reducers/labyrinth';
import { OptionBtn, RestartBtn } from 'library/buttons';

const GameScreen = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const gameDescription = useSelector((store) => store.labyrinth.description)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const dispatch = useDispatch()

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="storyContainer">
        <h2>{gameDescription}</h2>
      </div>
      {actions.map((action) => {
        return (
          <div className="actionsContainer" key={action.description}>
            <div className="buttonDesc">
              <p>{action.description}</p>
            </div>
            <div className="actionButton">
              <OptionBtn type="button" onClick={() => dispatch(generateOptions(action.type, action.direction, coordinates))}>Go {action.direction}</OptionBtn>
            </div>
          </div>
        )
      })}
      <RestartBtn type="button" onClick={handleRestart}>Restart game</RestartBtn>
    </>
  )
}

export default GameScreen;