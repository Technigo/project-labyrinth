// import TypeIt from 'typeit-react';
import React, { useState } from 'react';
import game, { startGame } from 'reducers/game.js';
import { useDispatch } from 'react-redux';

export const GameScreen = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(userNameInputValue))
    dispatch(startGame())
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <h1>Please enter your name to enter labyrinth:
      </h1>
      <label htmlFor="username">
        <input
          id="username"
          type="text"
          placeholder="Please enter name"
          value={userNameInputValue}
          onChange={(event) => setUserNameInputValue(event.target.value)} />
        <button type="submit" onClick={onFormSubmit}>Start Game</button>
      </label>
    </form>
  )
}

// export const GameScreen = () => {
//   const description = useSelector((store) => store.game.description)
//   const direction = useSelector((store) => store.game.direction)
//   const dispatch = useDispatch()

//   const restart = () => {
//     dispatch(game.actions.setUsername(''))
//     window.location.reload()
//   }
//   return (
//     <GameCard>
//       <TypeIt>{description}</TypeIt>
//       <FlexDiv>
//         {direction !== '1,3' && <Directions />}
//         <button className="restart-btn" type="button" onClick={restart}>Restart</button>
//       </FlexDiv>
//     </GameCard>
//   )
// }

// export default GameScreen