import React from 'react';
import { useSelector } from 'react-redux';

const Game = () => {
  const positionDescription = useSelector(
    (store) => store.game.description
  )

  // const dispatch = useDispatch()

  // const { description } = useSelector((store) => store.game.position)
  // const isLoading = useSelector((store) => store.game.loading)

  return (
    <article>
      <p>{positionDescription()}</p>
    </article>
  )
}

export default Game;