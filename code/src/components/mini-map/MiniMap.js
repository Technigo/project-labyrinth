import React from 'react'
import { useSelector } from 'react-redux';
import { SecondaryHeader } from 'components/global-style/Text';
import { MiniMapStyles, Box } from './MiniMap.styles';

export const MiniMap = () => {
  const coordinates = useSelector((store) => store.maze.coordinates)
  return (
    <>
      <SecondaryHeader>Your Map</SecondaryHeader>
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