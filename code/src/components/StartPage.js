import React from 'react';
import { useDispatch } from 'react-redux';
import { labyrinth } from '../reducers/description';
import { fetchStart } from '../reducers/description';
import styled from 'styled-components';

export const StartPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStart());
  };

  const onInputChange = (event) => {
    dispatch(labyrinth.actions.setUsername(event.target.value));
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1>Do you want to enter the labyrinth?</h1>
        <p>
          Write your name in the box below{' '}
          <Emoji role="img" aria-label="emoji">
            👇
          </Emoji>
        </p>
        <Input
          type="text"
          required
          placeholder="Write your name here:"
          onChange={onInputChange}
        />
        <Button>Yay! Let's go!</Button>
      </Form>
    </>
  );
};

const Emoji = styled.span`
  font-size: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: black;
`;

const Input = styled.input`
  align-self: center;
  margin: 15px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  background-color: #ff885e;
  width: 300px;
  text-align: center;
  text-transform: uppercase;
  color: black;
`;

const Button = styled.button`
  background-color: #ff885e;
  align-self: center;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1em;
  padding: 5px;
  border: 2px solid black;

  :hover {
    background-color: #ffc16a;
  }
`;
