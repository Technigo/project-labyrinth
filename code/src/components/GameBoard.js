import React from "react";
import PlayerInput from 'components/PlayerInput';
import GameScreen from "./GameScreen";
import Loading from "./Loading";
import { useSelector } from 'react-redux';

const GameBoard = () => {
    const username = useSelector(store => store.games.username)
    const loading = useSelector(store => store.games.loading)

    return (
        <>
{loading  && <Loading />}
{!loading && (
    <div>
    {username  
    ?  <GameScreen/> 
    : <PlayerInput/> 
    }
    </div>
)}
</>
    )
    }

export default GameBoard;