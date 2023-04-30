import styled from 'styled-components';

export const Button = styled.button`
  width: 183px;
  height: 67px;
  background: var(--blue);
  font-family: 'Press Start 2P', 'courier new';
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border: none;
  box-shadow: 5px 5px var(--mint);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 9px 9px var(--mint);
    transition: 0.3s;
  }
`