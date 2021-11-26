import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue } from '../reducers/description';
import styled from 'styled-components';

export const Description = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.labyrinth.currentPosition
  );
  const dispatch = useDispatch();

  const colorDictionary = {
    '0,0': 'url(https://images.unsplash.com/photo-1588571590960-9d6bfc172e01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
    '1,1': 'blue',
    '0,1': 'yellow',
    '0,2': 'purple',
    '0,3': 'green',
    '1,3': 'url(https://images.unsplash.com/photo-1588571590960-9d6bfc172e01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
  }

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
    <section className='labyrinth' style={{ background: colorDictionary[coordinates] }}>
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
