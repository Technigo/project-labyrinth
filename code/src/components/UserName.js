import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import styled from 'styled-components'

import { createPlayer, continueGame } from '../reducers/game'
import { game } from 'reducers/game'

const Button = styled.button`

`
const DirectionButton = styled.button`

`

const Form = styled.form`
`

const Input = styled.input`
`

export const UserName = () => {
    const [inputValue, setInputValue] = useState('')
    const start = useSelector((store) => store.game.game)
    const dispatch = useDispatch()

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
        <div>{start.description}</div>
        {start.actions?.map((direction, index) => {
        return ( 
            <div key={index}> 
            <div>{direction.description}</div>
            <div>{direction.coordinates}</div>
            <DirectionButton onClick={() => dispatch(continueGame(direction.direction, inputValue))}>{direction.direction}</DirectionButton>
            </div>
        )
    })}
    </>
)
}