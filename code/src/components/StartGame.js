import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import styled from 'styled-components'

import { createPlayer } from '../reducers/game'
import { game } from 'reducers/game'
import { GameDescription } from './GameDescription'
import { WelcomePlayer } from './WelcomePlayer'

const GameContainer = styled.div`
    background-color: #76a4ab;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 667px) {
        max-width: 600px;
        height: 60vh;
    }
`

const Header = styled.h1`
    font-size: 28px;
    text-align: center;
    padding-top: 20px;
`


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
`


const Button = styled.button`
    margin-top: 25px; 
`


export const StartGame = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const userName = useSelector((store) => store.game.username)

    const onSubmit = (e) => {
        e.preventDefault()
        batch(() => {
            dispatch(game.actions.addUserName(inputValue))
            dispatch(createPlayer(inputValue))
          })      
    }

return (
    <>
    <GameContainer>
        <Header>Labyrinth game</Header>
        <Form onSubmit={onSubmit}>
            <Input 
                aria-label='text area'
                type= 'text' 
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                placeholder='Type your username'
            ></Input>
            <Button>Start game</Button>
        </Form>
        { userName && <WelcomePlayer userName={userName} />}
        <GameDescription inputValue={inputValue} />
        </GameContainer>
    </>
)
}