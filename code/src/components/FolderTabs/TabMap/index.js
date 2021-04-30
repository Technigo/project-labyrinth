import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, BoxColumn, Box, BoxVisited } from './style';

const boxes = [
  [{ x: 0 }, { x: 0 }, { x: 0 }, { x: 0 }],
  [{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }]
];

const MapBox = ({ pos }) => {
  const matchCurrPos = useSelector(
    (store) => store.room.saved.currentRoom.coordinates === pos
  );
  const inHistory = useSelector((store) => {
    return store.room.saved.history.find((hisPos) => hisPos === pos);
  });

  return (
    <>{inHistory !== undefined ? <BoxVisited matchCurrPos={matchCurrPos} /> : <Box />}</>
  );
};

export default () => {
  return (
    <Wrapper>
      <BoxColumn>
        {boxes[0].map((box, index) => (
          <MapBox pos={`${box.x},${index}`} key={`boxpos${index + 1}`} />
        ))}
      </BoxColumn>
      <BoxColumn>
        {boxes[1].map((box, index) => (
          <MapBox pos={`${box.x},${index}`} key={`boxpos${index + 1}`} />
        ))}
      </BoxColumn>
    </Wrapper>
  );
};
