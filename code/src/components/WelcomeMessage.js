import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "nes.css/css/nes.min.css"

import { registerNewPlayer } from 'reducers/game'
import GameBoard from './GameBoard'
import { WelcomeMessageContainer, Header, ButtonContainer } from './styled-components/WelcomeMessageStyling'

const WelcomeMessage = () => {
    const userName = useSelector((store) => store.game.username)
    const gameStatus = useSelector((store) => store.game.gameStatus.coordinates)

    const dispatch = useDispatch()
    
    return(
        <>  
            {!gameStatus && (
                <WelcomeMessageContainer>
                        <div class="nes-container is-rounded is-dark">
                            <Header>Welcome to the labyrinth {userName}!</Header>
                            <p>Press start to enter:</p>
                            <ButtonContainer>
                                <button 
                                    type="button" 
                                    class="nes-btn is-success"
                                    onClick={() => dispatch(registerNewPlayer(userName))}
                                >
                                    Start
                                </button>
                            </ButtonContainer>
                        </div>
                </WelcomeMessageContainer>
            )}
            {gameStatus && <GameBoard />}
        </>
    )
}

export default WelcomeMessage;