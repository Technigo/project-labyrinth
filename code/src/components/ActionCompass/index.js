import React from 'react';
import Button from 'components/Button';
import Compass from './style';

const debugActions = [
  {
    type: 'move',
    direction: 'North',
    description: 'desc.'
  },
  {
    type: 'move',
    direction: 'West',
    description: 'desc.'
  },
  {
    type: 'move',
    direction: 'East',
    description: 'desc.'
  },
  {
    type: 'move',
    direction: 'South',
    description: 'desc.'
  }
];

export default ({ setActiveAction }) => {
  const handleChange = (event) => {
    setActiveAction(event.target.value);
  };
  return (
    <Compass>
      {debugActions.map((action) => (
        <div key={action.direction}>
          <Button
            fixedSquare
            type="button"
            value={action.direction}
            onClick={handleChange}>
            {action.direction[0]}
          </Button>
        </div>
      ))}
    </Compass>
  );
};
