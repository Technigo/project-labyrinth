import React from 'react';
import { useSelector } from 'react-redux';

const Game = () => {
  // const positionDescription = useSelector(
  //   (store) => store.game.position.description
  // )

  const actions = useSelector((store) => store.game.direction)
  // const isLoading = useSelector((store) => store.game.loading)

  return (
    <article>
      {actions}
    </article>
  )
}

export default Game;