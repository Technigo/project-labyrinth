import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue, labyrinth } from '../reducers/description';
import styled from 'styled-components';

export const Description = () => {
  const dispatch = useDispatch();

  const { description, /* coordinates, */ actions } = useSelector(
    (store) => store.labyrinth.currentPosition
  );
  const username = useSelector((state) => state.labyrinth.username);
  const showMap = useSelector((state) => state.labyrinth.storeCoordinates);

  const onButtonClick = (type, direction) => {
    dispatch(fetchContinue(type, direction));
  };

  const Actions = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <Button onClick={() => onButtonClick(type, direction)}>
        {type} {direction.toLowerCase()} {/* To uppercase istället??!=) */}
      </Button>
    </div>
  );

  return (
    <section>
      <h1>{description}</h1>
      {actions.length === 0 && (
        <>
          <h3>Congrats {username}, you made it out!</h3>
          <p>
            Number of moves: <span>{showMap.length}</span>
          </p>
          <Button
            className="restart-btn"
            type="button"
            onClick={() => {
              dispatch(labyrinth.actions.restart());
            }}>
            Restart
          </Button>
        </>
      )}

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
