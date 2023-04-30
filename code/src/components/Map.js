import React from 'react'
import { useSelector } from 'react-redux'
import Default from '../assets/map0.png'
import Map0 from '../assets/00.png'
import Map1 from '../assets/01.png'
import Map2 from '../assets/02.png'
import Map3 from '../assets/03.png'
import Map4 from '../assets/10.png'
import Map5 from '../assets/11.png'
import Map6 from '../assets/13.png'

const Map = () => {
  const currentLocation = useSelector((state) => state.game.response.coordinates)
  const currentLocationString = currentLocation.split(',').join('')
  let imageUrl = '';

  switch (currentLocationString) {
    case '00':
      imageUrl = Map0;
      break;
    case '01':
      imageUrl = Map1;
      break;
    case '02':
      imageUrl = Map2;
      break;
    case '03':
      imageUrl = Map3;
      break;
    case '10':
      imageUrl = Map4;
      break;
    case '11':
      imageUrl = Map5;
      break;
    case '13':
      imageUrl = Map6;
      break;
    default:
      imageUrl = Default;
      break;
  }

  return (
    <img src={imageUrl} alt="map" />

  );
}

export default Map;