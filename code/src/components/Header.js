import React from 'react' 
import styled from 'styled-components'

const Header = () => {
  
  const onRestartButton = () => {
      window.location.reload()
  }

  return (
    <HeaderContainer>
        <button onClick={onRestartButton}>
            Restart
        </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  width: 100vw;
  background-color: yellow;
`;

export default Header