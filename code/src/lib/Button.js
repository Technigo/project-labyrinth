import styled from 'styled-components/macro'

export const Button = styled.button`
  margin: 6px;
  padding: 8px;
  font-size: 16px;
  font-weight: 650;
  background: ${(props) => props.background || '#2284CD'};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color:white;

  &:hover {
    background: #007fff;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  } 
`