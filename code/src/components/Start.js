import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStart } from '../reducers/start';

export const Start = () => {
  // // const start = useSelector(store => store.start.startMode);
  const dispatch = useDispatch();

  return (
    <div>
      <button type='button' onClick={() => dispatch(fetchStart())}>
        Fetch start!
      </button>
      <p>TEST</p>
      HEJ
    </div>
  );
};
