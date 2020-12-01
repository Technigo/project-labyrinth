import styled from "styled-components/macro";

export const Button = styled.button`
  padding: 8px;
  margin: 6px 0px;
  width: 110px;
  background: ${props => props.background || "#bbbfca"};
  color: #495464;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  &:hover {
    background: #026873;
    color: white;
    cursor: pointer;
  }
  &:disabled {
    background: #cfd0d0;
    color: #aaaaaa;
    cursor: not-allowed;
  }
`;
