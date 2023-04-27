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
  text-align: left;
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
  width: 155px;
  border-radius: 14px;
  background: #fcfdfc;
  border: none;
}

#gameEnd {
  font-size:1.4rem;
}
`
export const BigText = styled.h1`
  font-size: 15px;
  font-family: 'Futura';
`