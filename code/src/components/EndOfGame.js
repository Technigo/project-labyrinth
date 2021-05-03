import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import { EndGamePageContainer, Header, RestartButtonContainer, Credits } from './styled-components/EndOfGameStyling'

const EndOfGame = () => {
    const currentDescription = useSelector((store) => store.game.gameStatus)

    return (
        <EndGamePageContainer>
            <div class="nes-container is-rounded is-dark">
                <Header>{currentDescription.description}</Header>
                <RestartButtonContainer>
                    <button
                        type="button"
                        class="nes-btn is-warning"
                        aria-label='Restart button'
                        onClick={() => window.location.reload()}
                    > 
                        Restart game!
                    </button>
                </RestartButtonContainer>
                <Credits>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik </a> 
                        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </Credits>
            </div>
        </EndGamePageContainer>
     )
}

export default EndOfGame