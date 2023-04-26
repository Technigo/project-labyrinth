/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MainButton, North, South, West, East } from '../lib/buttons'
import { labyrinth, generateActionData } from '../reducers/labyrinth'

const Directions = () => {
  const dispatch = useDispatch()
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log('DIRECTIONS coordinates:', coordinates)
  const description = useSelector((store) => store.labyrinth.description)
  console.log('DIRECTIONS description:', description)
  const actions = useSelector((store) => store.labyrinth.actions)
  console.log('DIRECTIONS actions:', actions)

  const startposition = coordinates === '';
  const endposition = coordinates === '1,3';

  const onClickRestart = () => {
    console.log('user clicked restart')
    dispatch(labyrinth.actions.restart());
  }

  const onClickGo = (type, direction) => {
    console.log('user clicked one of the arrows')
    dispatch(generateActionData(type, direction))
  }

  return (
    <>
      {!endposition && !startposition && (
        <>
          {actions.map((action) => {
            let buttonElement = null;
            if (action.direction === 'South') {
              buttonElement = <South handleClick={() => onClickGo(action.type, 'South')} key={action.direction} />;
            } else if (action.direction === 'North') {
              buttonElement = <North handleClick={() => onClickGo(action.type, 'North')} key={action.direction} />;
            } else if (action.direction === 'West') {
              buttonElement = <West handleClick={() => onClickGo(action.type, 'West')} key={action.direction} />;
            } else if (action.direction === 'East') {
              buttonElement = <East handleClick={() => onClickGo(action.type, 'East')} key={action.direction} />;
            }
            return buttonElement;
          })}
        </>
      )}
      {!startposition && (
        <MainButton style={{ position: 'absolute', bottom: '0', right: '0' }} onClick={onClickRestart}>Restart</MainButton>
      )}
    </>
  );
};

export default Directions;

/*
<img className="soundbutton" src="https://img.icons8.com/ios-filled/50/null/room-sound.png" alt="sound button" />

actions.map(action => (
  action.direction === 'South' ? (
    <South onClick={() => onClickGo('SOUTH')} />
  ) : action.direction === 'North' ? (
    <North onClick={() => onClickGo('NORTH')} />
  ) : action.direction === 'West' ? (
    <West onClick={() => onClickGo('WEST')} />
  ) : (
    <East onClick={() => onClickGo('EAST')} />
  )
))

  return (
    <>
      {!endposition && !startposition && (
        <>
          <button type="button" onClick={() => onClickGo('North')}>
            <North />
          </button>
          <button type="button" onClick={() => onClickGo('South')}>
            <South />
          </button>
          <button type="button" onClick={() => onClickGo('West')}>
            <West />
          </button>
          <button type="button" onClick={() => onClickGo('East')}>
            <East />
          </button>
        </>
      )}
      {!startposition && (<MainButton style={{ position: 'absolute', bottom: '0', right: '0' }} onClick={onClickRestart}>Restart</MainButton>)}
    </>
  )

*/