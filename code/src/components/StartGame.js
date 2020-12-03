import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import styled from 'styled-components'

import { createPlayer } from '../reducers/game'
import { game } from 'reducers/game'
import { GameDescription } from './GameDescription'
import { WelcomePlayer } from './WelcomePlayer'
import maze from '../assets/maze.svg'
 
const GameContainer = styled.div`
    background-color: #76a4ab;
    opacity: 0.9;
    border-radius: 20px;
    width: 350px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 11px 11px 14px -1px #141414;

    @media (min-width: 667px) {
        width: 600px;
        height: 100%;
        margin-top: 120px;
    }
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.h1`
    font-size: 28px;
    text-align: center;
    padding-top: 20px;

    @media (min-width: 667px) {
        font-size: 36px;
    }
`

const Icon = styled.img`
    width: 80px; 
    justify-content: center;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 667px) {
        width: 130px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 130px;
    height: 25px;
`

const Button = styled.button`
    margin-top: 25px; 
    font-size: 18px;
    padding: 8px;
    border-radius: 10px;
    border: none;
    background-color: #dbcac7;
    margin-bottom: 50px;
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
        <HeaderContainer>
            <Header>La<span style={{color: '#314834'}}>by</span>rinth game</Header>
            <Icon src={maze} alt='maze' /> 
        </HeaderContainer>
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