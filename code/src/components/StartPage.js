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
          <span role="img" aria-label="emoji">
            👇
          </span>
        </p>
        <Input
          type="text"
          required
          placeholder="Write your name here:"
          onChange={onInputChange}
        />
        <Button>
          {' '}
          <span role="img" aria-label="emoji">
            🗿
          </span>{' '}
          Lets do the labyrinth!
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const Input = styled.input`
  align-self: center;
  margin: 15px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  width: 300px;
  text-align: center;
`;

const Button = styled.button`
  align-self: center;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1em;
  border: none;
`;
