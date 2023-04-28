import React from 'react';
import cavernstartIMG from '../assets/cavernstartIMG.png';
import cavernbridgeIMG from '../assets/cavernbridgeIMG.png';
import cavernbrightcolorfulIMG from '../assets/cavernbrightcolorfulIMG.png';
import mechanicalroomIMG from '../assets/mechanicalroomIMG.png';
import mechanicalroom2IMG from '../assets/mechanicalroom2IMG.png';
import largechestIMG from '../assets/largechestIMG.png';
import openinginwallIMG from '../assets/openinginwallIMG.png';

export const EnvironmentIMG = (props) => {
  if (props.coordinates === '0,0') {
    return (
      <img src={cavernstartIMG} alt="environmental render" />
    )
  } else if (props.coordinates === '1,0') {
    return (
      <img src={cavernbridgeIMG} alt="environmental render" />
    )
  } else if (props.coordinates === '1,1') {
    return (
      <img src={cavernbrightcolorfulIMG} alt="environmental render" />
    )
  } else if (props.coordinates === '0,1') {
    return (
      <img src={mechanicalroomIMG} alt="environmental render" />
    )
  } else if (props.coordinates === '0,2') {
    return (
      <img src={mechanicalroom2IMG} alt="environmental render" />
    )
  } else if (props.coordinates === '0,3') {
    return (
      <img src={largechestIMG} alt="environmental render" />
    )
  } else {
    return (
      <img src={openinginwallIMG} alt="environmental render" />
    )
  }
}