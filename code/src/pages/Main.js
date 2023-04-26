import React from 'react'
import { useDispatch } from 'react-redux';
import { postUsername, game } from 'reducers/game';

const Main = () => {
  const dispatch = useDispatch()

  dispatch(postUsername())

  return (<h1>Main</h1>);
}

export default Main;