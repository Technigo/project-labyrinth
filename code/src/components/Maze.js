import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { nextStep } from "../reducers/gamereducer"

const Maze = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.gamereducer.currentPosition
  )
  const dispatch = useDispatch()

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  const NextAction = ({ description, type, direction }) => (
    <div className='next-action'>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  )

  return (
    <section>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h3>Yes! you find your way out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <NextAction key={item.direction} {...item} />)}
    </section>
  )
}

export default Maze
