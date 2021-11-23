import React from 'react';

// useSelector game
export const Switcher = (coordinates) => {
  switch (coordinates) {
    case '0,0':
      return 'archway';

    case '1,0':
      return 'ceiling';
    case '1,1':
      return 'colorfulCavernWall';

    case '0,1':
      return '4walledMechanicalRoom';
    case '0,2':
      return 'changingColorInTheRoom';
    case '0,3':
      return 'chestPaper';
    case '1,3':
      return 'NewBeginning';
    default:
      return 'error';
  }
};
