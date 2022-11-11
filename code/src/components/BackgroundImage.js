import React from 'react';
/* import archway from 'assets/archway.png'; */
import warmer from 'assets/warmer.png';
import cavern from 'assets/cavern.png';
import cavernColorful from 'assets/cavern-colorful.png'
import gears from 'assets/gears.png'
import music from 'assets/music-note.png'
import chest from 'assets/chest.png'
import trophy from 'assets/trophy.png'

const backgrounds = {
  '0,0': cavern,
  '1,0': warmer,
  '1,1': cavernColorful,
  '0,1': gears,
  '0,2': music,
  '0,3': chest,
  '1,3': trophy
}

const BackgroundImage = ({ coordinates }) => {
  return (
    <div>
      <img src={backgrounds[coordinates]} alt="blabla" />
    </div>
  );
};

export default BackgroundImage;