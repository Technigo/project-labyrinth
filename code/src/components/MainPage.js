import React from 'react';
import { useSelector } from 'react-redux';
import StartPage from './StartPage.js'
import GameBoard from './GameBoard.js'
import { FinalPage } from './FinalPage.js'

const MainPage = () => {
  // const [username, setUsername] = useState('');
  // const dispatch = useDispatch();
  const globalGameStep = useSelector((store) => store.game.gameStep.coordinates);

  // create function that stores coordinates

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(game.actions.setUsername(username))
  //   dispatch(getGameStarted());
  // }

  if (globalGameStep === '0,0' || globalGameStep === '1,0' || globalGameStep === '1,1' || globalGameStep
  === '0,1' || globalGameStep === '0,2' || globalGameStep === '0,3') {
    return <GameBoard />
  } else if (globalGameStep === '1,3') {
    return <FinalPage />
  }
  return (
    <StartPage />)
}

export default MainPage;