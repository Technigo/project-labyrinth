import React from 'react';
import { useSelector } from 'react-redux';
// import Actions from './Actions';

const Game = () => {
  const description = useSelector((store) => store.game.description)
  console.log('desc', description)
  // const direction = useSelector((store) => store.game.direction)
  // const type = useSelector((store) => store.game.type)
  // const coordinates = useSelector((store) => store.game.coordinates)

  // const dispatch = useDispatch()

  // const onNextPlay = (event) => {
  //   dispatch(game.actions.setDirection(event.target.value))
  //   dispatch(playerAction())
  // }

  // const isLoading = useSelector((store) => store.game.loading)

  return (
    <section>
      <p>{description.description}</p>
    </section>
  )
}

export default Game;