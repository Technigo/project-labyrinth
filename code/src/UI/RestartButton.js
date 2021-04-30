import React from 'react'
import styled from 'styled-components'


const RestartButton = ({ text }) => {
    return (
        <BackButton
            type='button'
            className='nes-btn'>
            {text}
        </BackButton>
    )
}

export default RestartButton

const BackButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    margin-top: 45px;
`