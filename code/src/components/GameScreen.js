import React from 'react';
import { useDispatch } from 'react-redux'
import { fetchGame } from 'reducers/game'

const GameScreen = () => {
    return (
        <button type="button" onClick=() => dispatch (fetchGame())}>
        Welcome to the Maze!
        </button>
    )
}

export default GameScreen
// import { useSelector, useDispatch } from 'react-redux';

// import game, { generateMaze } from 'reducers/game';
// import Loading from './LoadingPage';

// const GameScreen = () => {
//     const maze = useSelector((store) => store.game.gameStatus);
//     const history = useSelector((store) => store.game.maze);

//     const dispatch = useDispatch()

//     const onMazeRegenerate = (mazeTag) => {
//         dispatch(generateMaze(mazeTag));
//     };
    
//     const onMazeRevert = () => {
//         dispatch(game.actions.setPreviousMaze());
//     };

//     return (
//         <div>
//             <button disable={!history.length} onClick={onMazeRevert}>Go back</button>
//             <h3>This is a Maze : {maze.content}</h3>
//             {maze.tags.map((tag) => (
//                 <button key={tag}
//                 onClick={() => onMazeRegenerate(tag)}>
//                     {tag}
//                     </button>
//             ))}
//         </div>
//     );
// };

// export default GameScreen;