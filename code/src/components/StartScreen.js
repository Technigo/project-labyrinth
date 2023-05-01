import React from 'react';
import { useSelector } from 'react-redux';
// import { Player } from '@lottiefiles/react-lottie-player';
import { Loading } from './Loading.js';
import { GameScreen } from './GameScreen.js';
import { GameContent } from './GameContent.js';

export const StartScreen = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <startscreencontainer>
      {isLoading ? <Loading /> : (<> {isUserNameProvided === '' ? <GameScreen /> : <GameContent />} </>)}
    </startscreencontainer>
  )
}

// export const StartScreen = () => {
//   const [usernameInputValue, setUsernameInputValue] = useState('') // Add Value?
//   const dispatch = useDispatch()

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     dispatch(game.actions.setUsername(usernameInputValue));
//     dispatch(startGame());
//   };

//   return (
//     <form onSubmit={(event) => onFormSubmit(event)}>
//       <h1>Welcome to the Purple Maze</h1>
//       <p>Submit your name to enter the haze</p>
//       <label htmlFor="username">
//         <input
//           id="username"
//           type="text"
//           placeholder="My name is"
//           value={usernameInputValue}
//           onChange={(event) => setUsernameInputValue(event.target.value)} />
//         <NameButton type="submit" onClick={onFormSubmit} buttonText="Submit" />
//       </label>
//     </form>
//   )
// }

// export default StartScreen;

// export const StartScreen = () => {
//   const gameStarted = useSelector((store) => store.game.isStarted);
//   const loading = useSelector((store) => store.game.loading);
//   return (
//     <>
//       {/* <div className="start-container">
//         <Player src="https://assets9.lottiefiles.com/packages/lf20_LHHbJ8.json" className="top-lottie" loop autoplay />
//       </div> */}
//       <h1>The Labyrinth</h1>
//       {loading && <Loading />}
//       {!loading && (
//         <div>
//           {!gameStarted && <GameScreen />}//           {gameStarted && <GameContent />}
//         </div>
//       )}
//     </>
//   )
// }

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
//   return (
//     <div className="Start-box">
//       <h1>PURPLE HAZE</h1>
//       <p>Welcome to the maze</p>
//       <form onSubmit={onFormSubmit}>
//         <label htmlFor="userName">
//           <span>Username:</span>
//           <br />
//           <input
//             type="text"
//             id="userName"
//             onChange={(event) => setUsernameInput(event.target.value)}
//             value={usernameInput} />
//         </label>
//         {/* <SubmitBtn type="submit">Submit</SubmitBtn> */}
//       </form>
//     </div>
//   );
// };