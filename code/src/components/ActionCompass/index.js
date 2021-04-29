/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'components/Button';
import Compass from './style';

const defaultActions = [
  {
    type: 'move',
    direction: 'North',
    order: 1,
    description: null
  },
  {
    type: 'move',
    direction: 'West',
    order: 2,
    description: null
  },
  {
    type: 'move',
    direction: 'East',
    order: 3,
    description: null
  },
  {
    type: 'move',
    direction: 'South',
    order: 4,
    description: null
  }
];

export default ({ setAction }) => {
  const room = useSelector((store) => store.room.currentRoom);

  // function to sort through actions from API
  // and then merge them in correct order based on default Actions
  const availableActions = defaultActions.map((action) => {
    const item = room.actions.find((i) => i.direction === action.direction);
    return { ...action, ...item };
  });

  const handleChange = (direction, description) => {
    setAction({
      description,
      direction
    });
  };

  return (
    <Compass>
      {availableActions.map((action) => (
        <div key={action.direction}>
          <Button
            disabled={action.description === null}
            fixedSquare
            type="button"
            onClick={() => handleChange(action.direction, action.description)}>
            {action.direction[0]}
          </Button>
        </div>
      ))}
    </Compass>
  );
};
