import React from 'react';
import { useSelector } from 'react-redux';
import { Box, MiniMapStyles } from './MiniMap.styles';

export const UserHistory = () => {
  const route = useSelector((state) => state.userhistory.choices)
  const coordinates = useSelector((store) => store.maze.coordinates)
  return (
    <>
      <p>Your Path</p>
      <p>Start: {route.join(' ➡️ ')}</p>
      <p>Current Coordinates: {coordinates} </p>
      <h2>Mini Map</h2>
      <MiniMapStyles>
        <Box spDisplay={coordinates === '0,3' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '1,3' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '0,2' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '1,2' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '0,1' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '1,1' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '0,0' ? 'block' : 'none'}><span>⭐</span></Box>
        <Box spDisplay={coordinates === '1,0' ? 'block' : 'none'}><span>⭐</span></Box>
      </MiniMapStyles>
    </>
  )
}