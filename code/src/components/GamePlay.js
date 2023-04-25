/* eslint-disable linebreak-style */
import { useSelector } from 'react-redux';

export const GamePlay = () => {
  const story = useSelector((store) => store.game.position)
  console.log(story)
}