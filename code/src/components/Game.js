import React from 'react'
import { useSelector } from 'react-redux'

import Loading from './Loading'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import { Container } from './Styles.js'
import styled from 'styled-components'

const Game = () => {
    const username = useSelector(store => store.game.username)
    const isLoading = useSelector((store) => store.ui.isLoading)


return (
    <Container>
         {isLoading && <Loading/>}
        {!isLoading && (
            <>
        {username 
            ? <GameScreen />
            : <StartScreen/>
        }
        </>
        )
        
        }
        </Container>
) 
}

export default Game