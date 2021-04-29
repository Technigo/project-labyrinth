import styled from 'styled-components/macro';

import boxImg from 'assets/mapbox-default.png';
import boxImgOn from 'assets/mapbox-on.png';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  margin: 0 auto;
`;
export const BoxColumn = styled.div`
  display: flex;
  width: 50%;
  flex-flow: column-reverse;
`;

export const Box = styled.div`
  background: url(${boxImg}) no-repeat;
  /* line-height: 24px; */
  /* display: inline-block; */
  background-size: auto 100%;
  /* padding-left: 34px; */
  width: 50px;
  height: 50px;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
  opacity: 0;
`;

export const BoxVisited = styled(Box)`
  opacity: 1;
  ${(props) => props.matchCurrPos && `background-image: url(${boxImgOn});`}
`;
