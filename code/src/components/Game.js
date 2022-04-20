import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNextPosition } from '../reducers/game'
import styled from 'styled-components/macro'

const NextStepSection = styled.section`
    background-color: black;
    color: lime;
    font-size: 10px;
    border: 1px solid grey;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const Game = () => {

    const currentPosition = useSelector((state) => state.game.currentPosition)
    const userName = useSelector((state) => state.game.username)

    const dispatch = useDispatch()

    const onAction = (actionDirection) => {
        dispatch(getNextPosition(actionDirection, userName))
    }

    return (
        <NextStepSection>
            {currentPosition && (
                <div>
                    <h1>{currentPosition.description}</h1>
                    {currentPosition.actions.map((action, index) => {
                        return (
                            <NextStepSection key={index}>
                                <h2>{action.description}</h2>
                                <button onClick={() => onAction(action.direction)}>Go {action.direction}</button>
                            </NextStepSection>
                        )
                    })}
                </div>
            )}
        </NextStepSection>
            
    )

}

export default Game