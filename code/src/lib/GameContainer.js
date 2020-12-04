//Tried to make this only as a style since  GameBackground 
//couldn't be used.
//Tried to make a new page GamePage where this would be rendered,
//but trouble with sending coordinates as props because it reads undefined at startpage

import styled from "styled-components/macro"
// import { 
//   imgUrl_00,
//   imgUrl_10,
//   imgUrl_11,
//   imgUrl_01,
//   imgUrl_02,
//   imgUrl_03,
//   imgUrl_13,
//   imgUrl_start
//  } from '../lib/ImageUrls'

export const GameContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage });
`
 // background-image: url(${(props) => 
  //     !props.coordinates 
  //   ? imgUrl_start 
  //   :  props.coordinates === '0,0'
  //   ? imgUrl_00 
  //   : props.coordinates === '1,0'
  //   ? imgUrl_10
  //   : props.coordinates === '1,1'
  //   ? imgUrl_11
  //   : props.coordinates === '0,1'
  //   ? imgUrl_01
  //   : props.coordinates === '0,2'
  //   ? imgUrl_02
  //   : props.coordinates === '0,3'
  //   ? imgUrl_03
  //   : props.coordinates === '1,3'
  //   ? imgUrl_13 
  //   : imgUrl_start 
  //   || imgUrl_start });