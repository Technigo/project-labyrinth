import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import game from 'reducers/game'

const GameBoard = () => {
    const gameQuestion = useSelector((store) => store.game.question)

    const dispatch = useDispatch()

    fetch('https://wk16-backend.herokuapp.com/action')
        .then(res => res.json())
        .then(question => dispatch(question.actions.setQuestion(question)));

    return(
        <>
        <h1>This is a test question: {gameQuestion.description}</h1>
        </>
    )
}

export default GameBoard