import React from 'react';
import { useSelector } from 'react-redux';
import { UserHistoryStyles } from './UserHistory.styles';
import { BodyText } from '../global-style/Text';

export const UserHistory = () => {
  const route = useSelector((state) => state.userhistory.choices)
  // const coordinates = useSelector((store) => store.maze.coordinates)
  return (
    <UserHistoryStyles>
      <div>
        <BodyText>Your Path: {route.join(' ➡️ ')}</BodyText>
        {/* <BodyText>Current Coordinates: {coordinates} </BodyText> */}
      </div>
    </UserHistoryStyles>
  )
}