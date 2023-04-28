import React from 'react';
import cavernstartIMG from '../assets/0,0.png';
import cavernlightIMG from '../assets/1,0.jfif';
import cavernbrightcolorfulIMG from '../assets/1,1.gif';
import mechanicalroomIMG from '../assets/0,1.jfif';
import wallcolorIMG1 from '../assets/0,21.jfif';
import largechestIMG from '../assets/chest.webp';
import endIMG from '../assets/end.jfif';
import { EnImg } from './GameCSS'

export const EnvironmentIMG = ({ coordinates }) => {
  let imagePath;

  switch (coordinates) {
    case '0,0':
      imagePath = cavernstartIMG;
      break;
    case '1,0':
      imagePath = cavernlightIMG;
      break;
    case '1,1':
      imagePath = cavernbrightcolorfulIMG;
      break;
    case '0,1':
      imagePath = mechanicalroomIMG;
      break;
    case '0,2':
      imagePath = wallcolorIMG1;
      break;
    case '0,3':
      imagePath = largechestIMG;
      break;
    default:
      imagePath = endIMG;
      break;
  }

  return <EnImg src={imagePath} alt="environmental render" />;
};
