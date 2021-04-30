import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAction } from 'store/room';
import Compass, { RadioButton, RadioLabel } from './style';

const defaultActions = [
  {
    type: 'move',
    direction: 'North',
    selected: false,
    description: null
  },
  {
    type: 'move',
    direction: 'West',
    selected: false,
    description: null
  },
  {
    type: 'move',
    direction: 'East',
    selected: false,
    description: null
  },
  {
    type: 'move',
    direction: 'South',
    selected: false,
    description: null
  }
];

export default () => {
  const dispatch = useDispatch();
  const room = useSelector((store) => store.room.saved.currentRoom);

  // function to sort through actions from API
  // and then merge them in correct order based on default Actions
  const availableActions = defaultActions.map((action) => {
    const item = room.actions.find((i) => i.direction === action.direction);
    return { ...action, ...item };
  });
  const [actions, setActions] = React.useState(availableActions);

  const handleChange = (direction, description) => {
    const newActions = actions.map((action) => {
      return { ...action, selected: !action.selected };
    });
    setActions(newActions);
    dispatch(
      setAction({
        description,
        direction
      })
    );
  };

  return (
    <Compass>
      {actions.map((action) => (
        <div key={action.direction}>
          <RadioButton
            disabled={action.description === null}
            id={action.direction}
            name="actions"
            value={action.direction}
            onChange={() => handleChange(action.direction, action.description)}
            type="radio" />
          <RadioLabel htmlFor={action.direction}>{action.direction[0]}</RadioLabel>
        </div>
      ))}
    </Compass>
  );
};
