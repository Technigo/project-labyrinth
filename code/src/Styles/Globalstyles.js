// /////////////// IMPORTS //////////////////////// //

import styled, { createGlobalStyle } from 'styled-components/macro';

// /////////////// GLOBAL //////////////////////// //

export const GlobalRules = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Futura;
}

body {
  background-color: #f4a0b4;
}

main {
  position: relative;
}
`
// /////////////// GAMECONTAINER //////////////////////// //

export const GameWrapper = styled.div`

  margin: 10vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.bgColor || 'transparent')};
  text-align: center;
  align-items: center;

h1 {
  font-size: 1.2rem;
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
}
    
label {
  color: #fff;
  font-size: 0.8rem;
  padding-bottom: 10px;
}

#usernameInput {
  padding: 10px;
  width: 265px;
  border-radius: 14px;
  background: #3d81b8ff;
  border: none;
  color: #ffffff;
}
#usernameInput.placeholder {
  color: #ffffff;
}

#gameEnd {
  font-size:1.4rem;
}
`
export const BigText = styled.h1`
  font-size: 15px;
  font-family: 'Futura';
`

export const Protip = styled.img`
    display: flex;
    flex-direction: column;
    padding: 20px 30px 40px 30px;
    font-weight: bold;
    color: #EB5577;
    font-size: 16px;
    position: absolute;
    animation: bounce 1s infinite alternate;
    align-items: center;
    justify-content: center;
    left: calc(50% + 10px / 2);
    top: 20px;
    width: 150px;
    margin-top: 0px;

@keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }

  @media screen and (min-width: 768px) {
    /* Styles for tablets */
    width: 150px;
    top: 90px;
  }

  @media screen and (min-width: 1023px) {
    /* Styles for tablets */
    width: 150px;
    top: 140px;
  }
`;