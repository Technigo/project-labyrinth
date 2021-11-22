import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducers/game'
import { fetchFirstQuestion } from '../reducers/game'
import GameQuestion from './GameQuestion'
import Summary from './Summary'


const StartPage = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const userName = useSelector((store) => store.game.username);

    const onUsernameInput = (event, input) => {
        dispatch(game.actions.setUsername(input))
        event.preventDefault()
        dispatch(fetchFirstQuestion(input))
    }
    const gameQuestion = useSelector((store) => store.game.gameQuestions)
    const lastDescription = useSelector((store) => store.game.gameQuestions.description)
    return (
        <>
            {userName === '' && (
                <div>
                    <h1>Welcome to the maze</h1>
                    <input
                        type="text"
                        value={input}
                        placeholder="your name"
                        onChange={(event) => setInput(event.target.value)}
                        maxLength="15"
                    />
                    <button
                        type="button"
                        disabled={input < 5}
                        onClick={(event) => onUsernameInput(event, input)}
                    >
                        Start the game</button>
                </div>
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

export default StartPage