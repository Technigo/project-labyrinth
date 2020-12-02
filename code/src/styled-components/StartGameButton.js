import styled, { css } from 'styled-components';

export const StartGameButton = styled.button`
  background-color: rgb(32, 8, 191);
  color: white;
  font-family: 'Press Start 2P', cursive;
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;

  ${props => props.buttonwidth && css`
    width: 200px;
    margin: auto;
    margin-top: 30px;
  `}

  ${props => props.gobackbutton && css`
    background-color: ${(props) => props.background};
  `}
`;
