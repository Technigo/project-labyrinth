import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateOptions } from 'reducers/labyrinth';
import { OptionBtn, RestartBtn } from 'library/buttons';

const GameScreen = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const gameDescription = useSelector((store) => store.labyrinth.description)
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log(gameDescription)
  const dispatch = useDispatch()
  // gameActions within an object. map through the actions.
  console.log('actions:', actions)

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <h2><strong>{gameDescription}</strong></h2>
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

// end coordinates:'1,3' actions array is empty = the end.