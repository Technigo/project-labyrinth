import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { game } from '../reducers/game'
import { StartButton } from './StartButton'


const Form = styled.form`
`

const Input = styled.input`
`

export const UserName = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

const handleOnSubmit = e => {
    e.preventDefault()
  
    dispatch(game.actions.addUserName({    
        username: inputValue
    })
    )
    setInputValue('')
}
   
  

return (
        <Form onSubmit={handleOnSubmit}>
            <Input 
                aria-label='text area'
                type= 'text' 
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            ></Input>
            <StartButton />
        </Form>
)
}