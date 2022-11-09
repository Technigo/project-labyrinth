/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import Start from './Start';
import Location from './Location';

const Parent = () => {
  const username = useSelector((store) => store.labyrinth.username)
  return (
    <div>
      {username ? <Start /> : <Location />}
    </div>
  )
}
export default Parent;