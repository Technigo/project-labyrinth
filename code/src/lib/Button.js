import styled from "styled-components/macro";

export const Button = styled.button`
  padding: 8px;
  margin: 6px 0px;
  width: 120px;
  background: ${props => props.background || "#bbbfca"};
  color: #495464;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  &:hover {
    background: linear-gradient(to bottom, #b97597, #5865ac);
    color: white;
    cursor: pointer;
  }
  &:disabled {
    background: #cfd0d0;
    color: #aaaaaa;
    cursor: not-allowed;
  }
`;
