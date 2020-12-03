import styled from "styled-components/macro";

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #f1e3b0;
  color: black;
  border: none;
  border-radius: 5%;
  padding: 1vw;
  margin: 1vw;
  font-family: 'Quicksand', sans-serif;

  &:hover {
    cursor: pointer;
    background-color: #e4d08a;
  }
`;