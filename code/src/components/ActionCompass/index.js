import React from 'react';
import Button from 'components/Button';
import Compass from './style';

export default () => {
  return (
    <Compass>
      <Button fixedSquare>N</Button>
      <Button fixedSquare>W</Button>
      <Button fixedSquare>E</Button>
      <Button fixedSquare>S</Button>
    </Compass>
  );
};
