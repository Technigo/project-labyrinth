import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>&lt;THE LABYRINTH /&gt;</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    text-align: center;
    margin: 35px 10px 20px 10px;
    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 19px;
        text-decoration: dashed underline;
        color: rgb(164, 145, 230);
    }

    @media (min-width: 668px) {
      margin: 60px 10px 20px 10px;
        h1 {
          font-size: 24px;
      }
    }
`