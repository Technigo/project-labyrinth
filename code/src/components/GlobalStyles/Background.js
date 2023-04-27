/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from 'components/GlobalStyles/Images';

export const Background = styled.section`
background-image: url(${(props) => (props.coordinates === '' ? Img1 : props.coordinates === '0,0' ? Img2 : props.coordinates === '1,0' ? Img3 : props.coordinates === '1,1' ? Img4 : props.coordinates === '0,1' ? Img5 : props.coordinates === '0,2' ? Img6 : props.coordinates === '0,3' ? Img7 : props.coordinates === '1,3' ? Img8 : Img1)});
`