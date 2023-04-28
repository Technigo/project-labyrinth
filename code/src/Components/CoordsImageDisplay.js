import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import hej from './coord1-0.png';
import hej10 from './coord1-1.png';
import hej11 from './coord1-2.png';
import hej12 from './coord1-3.png';
import hej13 from './coord1-4.png';
import hej14 from './coord1-5.png';
import hej15 from './coord1-6.png';

export const CoordsImageDisplay = () => {
  const coordinates = useSelector((store) => store.labyrinthMango.coordinates)
  let imageToShow = null;

  if (coordinates === '0,0') {
    imageToShow = hej;
  } else if (coordinates === '1,0') {
    imageToShow = hej10;
  } else if (coordinates === '1,1') {
    imageToShow = hej11;
  } else if (coordinates === '0,1') {
    imageToShow = hej12;
  } else if (coordinates === '0,2') {
    imageToShow = hej13;
  } else if (coordinates === '0,3') {
    imageToShow = hej14;
  } else if (coordinates === '1,3') {
    imageToShow = hej15;
  }

  return (
    <div>
      <CoordImage src={imageToShow} alt="Displayed" />
    </div>
  );
}

export const CoordImage = styled.img`
  align-self: center;
  width: 300px;
  object-fit: contain;
`