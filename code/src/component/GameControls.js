// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { Button } from './Button'
// import { game } from '../reducers/game';
// import { generateGameStart} from '../reducers/reusable';

// const GameControls = () => {
//     const dispatch = useDispatch();
//     const [inputValue, setInputValue] = useState('')
//     const username = useSelector(store => store.game.username)

//     useEffect(() => {
//         onGameGenerate()
//     }, [username]) 


//     const onGameGenerate = () => {
//         dispatch(generateGameStart())
//     }

//     const setUserName = () => {
//         dispatch(game.actions.updateUserName(inputValue))
//     }

//     const onHistoryBack = () => {
//         dispatch(game.actions.historyGoBack());
//     }

//     return (
//         <div> 
//             <input
//                 type='text'
//                 placeholder='Type your username'
//                 value={inputValue}
//                 required
//                 onChange={e => setInputValue(e.target.value)}
//             />
//             <Button
//                 onButtonClick={setUserName}
//                 text='Start game'
//             />
//             <Button
//                 onButtonClick={onHistoryBack}
//                 text='Go back'
//             />
//         </div>
//     );
// };

// export default GameControls;

