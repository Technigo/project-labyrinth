import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionsGame } from 'reducers/game';
// import { Map } from './Map.js'

export const GameContent = () => {
  const { actions, coordinates } = useSelector((store) => store.game.position)
  // const { description, actions, coordinates } = useSelector((store) => store.game.position)
  const dispatch = useDispatch()
  const username = useSelector((store) => store.game.username)

  const onDirectionBtnClick = (direction) => {
    dispatch(actionsGame(direction))
  }

  const onRestartBtnClick = () => {
    return (
      window.location.reload()
    )
  }

  return (
    <div className="name-content-container">
      <player>
        <h2>{username}</h2>
        <button type="button" onClick={onRestartBtnClick}>Restart game
        </button>
      </player>
      <div className="game-container">
        <div className="navigation-container">
          <div className="actions-container">
            {actions.map((singleAction) => (
              <section className="action-move">
                <p>{singleAction.description}</p>
                <button
                  // buttonText={`Go ${singleAction.direction}`}
                  type="button"
                  onClick={() => onDirectionBtnClick(singleAction.direction)}>Button
                </button>
              </section>
            ))}
          </div>
        </div>
        {/* <Map coordinates={coordinates} /> */}
        <p>coordinates={coordinates}</p>
      </div>
    </div>
  )
}

/* const GameContent = () => {
  const direction = useSelector((store) => store.game.direction)
  const loadingState = useSelector((store) => store.loading.load)

  if (loadingState) {
    return (
      <Loading />
    )
  }
  return (
    <div direction={direction}>
      {direction === '' && <StartScreen />}
      {direction !== '' && <GameScreen />}
    </div>
  )
}
*/

export default GameContent
