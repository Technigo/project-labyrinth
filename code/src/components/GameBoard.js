import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"

import game, { continueGame } from 'reducers/game'

import LoadingIndicator from './LoadingIndicator'
import EndOfGame from './EndOfGame'
import { GameBoardContainer, Header, ActionContainer, GoBackButton, Action, ActionDescription } from './styled-components/GameBoardStyling'

const GameBoard = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)
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
            {isLoading 
                ? <LoadingIndicator />
                : <GameBoardContainer>
                    <div class="nes-container is-rounded is-dark">
                        <Header>{currentDescription.description}</Header>
                        {actions?.map((action, index) => {
                            return(
                            <Action>
                                <div key={index} class="nes-container is-rounded is-dark">
                                    <ActionContainer>
                                        <ActionDescription>{action.description}</ActionDescription>
                                        <button 
                                            type="button" 
                                            class="nes-btn is-success"
                                            aria-label='direction button'
                                            onClick={() => dispatch(continueGame(action.direction, userName))}
                                        >
                                            {action.direction}
                                        </button>
                                    </ActionContainer>
                                </div>
                            </Action>
                            )
                        })}
                        {history.length > 1 && ( 
                            <GoBackButton>
                                <button 
                                    type="button" 
                                    class="nes-btn is-primary"
                                    onClick={() => dispatch(game.actions.setPreviousDescription())}
                                >
                                    Go back
                                </button>
                            </GoBackButton>
                        )}
                    </div>
                </GameBoardContainer>
            }
        </>
    )
}

export default GameBoard