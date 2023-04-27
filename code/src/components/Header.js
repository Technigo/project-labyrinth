import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>THE LABYRINTH</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 10px 0;
    padding: 10px;
    h1 {
        font-size: 32px;
        color: rgb(164, 145, 230);
    }
`