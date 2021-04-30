import React from 'react' 
import styled from 'styled-components'

const Header = () => {
  
  const onRestartButton = () => {
      window.location.reload()
  }

  return (
    <HeaderContainer>
        <button className="nes-btn" onClick={onRestartButton}>
            Restart
        </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  width: 100vw;
  background-color: black;
`;

export default Header