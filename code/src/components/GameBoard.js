import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"

import game, { continueGame } from 'reducers/game'

import LoadingIndicator from './LoadingIndicator'
import EndOfGame from './EndOfGame'
import { GameBoardContainer, Header, ActionContainer} from './styled-components/GameBoardStyling'

const GameBoard = () => {
    const actions = useSelector((store) => store.game.gameStatus.actions)
    const currentDescription = useSelector((store) => store.game.gameStatus)
    const userName = useSelector((store) => store.game.username)
    const history = useSelector((store) => store.game.history)

    const dispatch = useDispatch()
    
    if (actions.length === 0) {
        return (
            <EndOfGame />
        )
    }
    return (
        <>
            <LoadingIndicator />
            <GameBoardContainer>
                <div class="nes-container is-rounded is-dark">
                    <Header>{currentDescription.description}</Header>
                        {actions?.map((action, index) => {
                            return(
                            <div key={index} class="nes-container is-rounded is-dark">
                                <ActionContainer>
                                    <p>{action.description}</p>
                                    <button 
                                        type="button" 
                                        class="nes-btn is-success"
                                        onClick={() => dispatch(continueGame(action.direction, userName))}
                                    >
                                        {action.direction}
                                    </button>
                                </ActionContainer>
                            </div>
                            )
                        })}
                    {history.length > 1 && ( 
                        <button 
                            type="button"
                            onClick={() => dispatch(game.actions.setPreviousDescription())}
                        >
                            Go back
                        </button>
                    )}
                </div>
            </GameBoardContainer>
        </>
    )
}

export default GameBoard