import React from 'react'
import { useSelector } from 'react-redux';
import { MapContainer, Grid } from 'styles/LabyrinthMapStyles';

export const LabyrinthMap = () => {
  const coordinates = useSelector((store) => store.labyrinth.currentGameState.coordinates);
  return (
    <MapContainer>
      <Grid spanDisplay={coordinates === '0,3' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '1,3' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '0,2' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '1,2' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '0,1' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '1,1' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '0,0' ? 'block' : 'none'}><span>🔴</span></Grid>
      <Grid spanDisplay={coordinates === '1,0' ? 'block' : 'none'}><span>🔴</span></Grid>
    </MapContainer>
  )
}