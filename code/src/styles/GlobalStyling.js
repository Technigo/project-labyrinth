import styled from 'styled-components/macro'

export const Button = styled.button`
  min-width: 60px;
  max-width: 60px;
  margin-top: 3px;
  padding: 3px 5px;
  background-color: #000;
  color: #fff;
  border-color: transparent;
  border-radius: 5px;
  align-self: center;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: #808080CC;
    cursor: not-allowed;
  }
`
