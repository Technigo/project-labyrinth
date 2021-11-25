import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue } from '../reducers/description';
import styled from 'styled-components';

export const Description = () => {
  const { description, actions } = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  const dispatch = useDispatch();

  const onButtonClick = (type, direction) => {
    dispatch(fetchContinue(type, direction));
  };

  const Actions = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <Button onClick={() => onButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </Button>
    </div>
  );

  return (
    <section>
      <h1>{description}</h1>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}

      {actions.length > 0 &&
        actions.map((item) => <Actions key={item.direction} {...item} />)}
    </section>
  );
};
const Button = styled.button`
  align-self: center;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1em;
  border: none;
`;
