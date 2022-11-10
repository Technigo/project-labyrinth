import React from 'react';
import { useSelector } from 'react-redux';

export const WelcomeMessage = () => {
  const username = useSelector((store) => store.maingame.username);

  return (
    <p>Welcome {username}</p>
  )
}