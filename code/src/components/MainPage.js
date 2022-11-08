import React from 'react'
import StartPage from 'StartPage'
import Game from 'Game'

//Not sure we need both "Game.js and MainPage.js"
//I was thinking the Main just to not have to much data in the App.js

const MainPage = () => {
    return (
        <>
        <StartPage />
        <Game />
        </>
    )
}

export default MainPage