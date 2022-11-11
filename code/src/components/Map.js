import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Map = () => {
  const currentCoordinates = useSelector((store) => store.labyrinth.coordinates)

  return (
    <EntireMap>
      <MapSection1 style={{ backgroundColor: currentCoordinates === '0.0' ? 'red' : 'none' }}>1</MapSection1>
      <MapSection2>2</MapSection2>
      <MapSection3>3</MapSection3>
      <MapSection4>4</MapSection4>
      <MapSection5>5</MapSection5>
      <MapSection6>6</MapSection6>
      <MapSection7>7</MapSection7>
      <MapSection8>8</MapSection8>
    </EntireMap>
  )
}

export default Map;

const EntireMap = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-rows: 1fr 1fr;
  width: 8rem;
  
`
const MapSection = styled.div`
  border: 1px solid black;

`
const MapSection1 = styled(MapSection)`
  grid-column-start: 1;
  
`
const MapSection2 = styled(MapSection)`
  grid-column-start: 2;
`
const MapSection3 = styled(MapSection)`
  grid-column-start: 3;
`
const MapSection4 = styled(MapSection)`
  grid-column-start: 4;
`
const MapSection5 = styled(MapSection)`
  grid-column-start: 1;
  grid-row-start: 2;
`
const MapSection6 = styled(MapSection)`
  grid-column-start: 2;
  grid-row-start: 2;
`
const MapSection7 = styled(MapSection)`
  grid-column-start: 3;
  grid-row-start: 2;
`
const MapSection8 = styled(MapSection)`
  grid-column-start: 4;
  grid-row-start: 2;
`