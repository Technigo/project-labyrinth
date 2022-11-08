import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard'
import PlayerInput from './PlayerInput'


const StartScreen = () => {
    const game = useSelector((store) => store.games.game);

    return <div>{game === '' ? <PlayerInput/> : <GameBoard/>}</div>
}

export default StartScreen
