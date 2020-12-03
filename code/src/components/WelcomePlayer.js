import React from 'react'
import styled from 'styled-components'

const WelcomeMessage = styled.h2`
    font-size: 24px;
    text-align: center;

`

export const WelcomePlayer = ({userName}) => {

    return (
    <WelcomeMessage>{userName} has now entered the Labyrinth</WelcomeMessage>
    )
}

 