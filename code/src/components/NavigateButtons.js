import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game, navigateGame } from '../reducers/game'

const NavigateButtons = () => {
  const directionAlternatives = useSelector(
    (store) => store.data.actions?.map((item) => item.direction)
  )
  const data = useSelector((store) => store.game.location);
  console.log(data)
  const actions = useSelector((store) => store.game.move);
  console.log(actions)

  const dispatch = useDispatch()

  const direction = {
    north: 'North',
    west: 'West',
    east: 'East',
    south: 'South'
  }

  // eslint-disable-next-line no-shadow
  const onClick = (direction) => {
    dispatch(navigateGame(direction))
    dispatch(game.actions.setStep(direction))
  }

  //   const onNavigate = (type, direction) => {
  //     dispatch(navigateGame(type, direction));
  //   };

  return (
    <>
      <button
        className="directionButton"
        type="button"
        value={direction.north}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.north)}>
        GO {direction.north} ↑
      </button>

      <button
        className="directionButton"
        type="button"
        value={direction.west}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.west)}>
        GO {direction.west} ←
      </button>

      <button
        className="directionButton"
        type="button"
        value={direction.east}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.east)}>
        GO {direction.east} →
      </button>

      <button
        className="directionButton"
        type="button"
        value={direction.south}
        onClick={(e) => onClick(e.target.value)}
        disabled={!directionAlternatives?.includes(direction.south)}>
        GO {direction.south} ↓
      </button>
      {/* <Restart /> */}
    </>
  )
}
export default NavigateButtons