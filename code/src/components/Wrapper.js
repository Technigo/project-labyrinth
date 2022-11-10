/* eslint-disable linebreak-style */
import React from 'react';
import { NotFound } from './NotFound';
import StartPage from './StartPage';
import { useSelector } from 'react-redux';
import { Loading } from './Loading'
import  Labyrinth  from './Labyrinth'
import { LogIn } from './LogIn';

const Wrapper = () => {
    const gameData = useSelector((store) => store.game.currentDirection)
    const isLoading = useSelector((store) => store.ui.isLoading)
    return (
        <div>
            {isLoading ? (
            <Loading />
             ) 
             :
            <div>
                {gameData ? <StartPage /> : <NotFound />}
            </div>}
        <Labyrinth />
        <LogIn />
        </div>
    )
}

export default Wrapper

