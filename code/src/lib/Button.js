import styled from 'styled-components'

export const Button = styled.button`
  margin: 6px;
  padding: 8px;
  font-size: 11px;
  font-weight: 650;
  background: ${(props) => props.background || '#5692ff'};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #007fff;
    color: #fff;
    cursor: pointer;
  } 
`