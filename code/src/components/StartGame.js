import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import styled from 'styled-components'

import { createPlayer } from '../reducers/game'
import { game } from 'reducers/game'
import { GameDescription } from './GameDescription'
import { WelcomePlayer } from './WelcomePlayer'

const Button = styled.button`

`


const Form = styled.form`
`

const Input = styled.input`
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
        <Form onSubmit={onSubmit}>
            <Input 
                aria-label='text area'
                type= 'text' 
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            ></Input>
            <Button>Start game</Button>
        </Form>
        { userName && <WelcomePlayer userName={userName} />}
        <GameDescription inputValue={inputValue} />
    </>
)
}