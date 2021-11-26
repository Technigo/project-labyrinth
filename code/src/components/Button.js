import styled from "styled-components";

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background-color: #e3cf8e;
  border: none;
  border-radius: 2px;
  margin-top: 5px;
  padding: 0 20px;
  box-shadow: 2px 1px 1px #32281f;

  &:hover {
    background-color: #32281f;
    color: white;
    box-shadow: 2px 1px 1px gray;
  }
`;

export default Button;
