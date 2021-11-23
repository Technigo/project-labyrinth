import React from 'react'
import { useSelector } from 'react-redux'

import GameQuestion from './GameQuestion'
import Summary from './Summary'
import StartPage from './StartPage'


const Page = () => {


    const userName = useSelector((store) => store.game.username);


    const gameQuestion = useSelector((store) => store.game.gameQuestions)
    const lastDescription = useSelector((store) => store.game.gameQuestions.description)
    return (
        <>
            {userName === '' && (
                <StartPage />
            )}
            {gameQuestion.actions ? gameQuestion.actions.length !== 0 && (
                <GameQuestion />
            ) : ''}
            {(userName !== '' && gameQuestion.actions ? gameQuestion.actions.length === 0 : '') && (
                <Summary description={lastDescription} />
            )}
        </>
    )
}

export default Page