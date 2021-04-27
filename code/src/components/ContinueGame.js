import React from 'react'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'

export const Container = styled.div`
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 6px;
    background: #fff;
    width: 500px;
    height: 500px;
`

const ContinueGame = () => {
    return ( 
        <Container>
            game continues 
            <button type="button" class="nes-btn is-primary">Primary</button>
        </Container>
    )
}

export default ContinueGame