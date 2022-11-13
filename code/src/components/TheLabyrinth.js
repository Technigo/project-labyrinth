/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import game, { gameBoard } from 'reducers/game';

const TheLabyrinth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()
  const selector = useSelector()
  // const data = useSelector((store) => store.game.location);

  useEffect(() => {
    dispatch(gameBoard());
    const data = useSelector((store) => store.game.location);
  })
  // const { x } = props
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setDescription(useSelector((store) => store.game.description));
  }, [isLoading])
  
  return (
    !isLoading
      ? (
        <div>
          <h1>Question:</h1>
          <p>{description}</p>
          {description && description.map((item) => <button type="button" key={item.id}>{item.x}</button>)}
        </div>
      )
      : (<>Loading...</>)
  )
}

export default TheLabyrinth