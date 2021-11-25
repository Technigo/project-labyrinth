import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue } from '../reducers/description';

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
      <button onClick={() => onButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
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
