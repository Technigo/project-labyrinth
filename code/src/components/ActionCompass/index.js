/* eslint-disable no-console */
import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Button from 'components/Button';
import Compass from './style';

const defaultActions = [
  {
    type: 'move',
    direction: 'North',
    description: null
  },
  {
    type: 'move',
    direction: 'West',
    description: null
  },
  {
    type: 'move',
    direction: 'East',
    description: null
  },
  {
    type: 'move',
    direction: 'South',
    description: null
  }
];

export default ({ setActiveAction }) => {
  const handleChange = (event) => {
    setActiveAction(event.target.value);
  };
  const room = useSelector((store) => store.room.currentRoom);
  const availableActions = _.uniqWith(
    room.actions.concat(defaultActions),
    (arrVal, othVal) => {
      return arrVal.direction === othVal.direction;
    }
  );
  console.log(availableActions);

  return (
    <Compass>
      {availableActions.map((action) => (
        <div key={action.direction}>
          <Button
            disabled={action.description === null}
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
