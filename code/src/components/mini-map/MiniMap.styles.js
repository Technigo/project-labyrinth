import styled from 'styled-components';

export const MiniMapStyles = styled.section`
  display: grid;
  width: 200px;
  height: 200px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4,1fr);
  gap: 1px;
  background: ivory;
  color: black;
  background-image: url('/assets/minimap.png');
  background-size: 100% 100%;
`

export const Box = styled.div`
 span {
    display: ${(props) => props.spDisplay || 'none'};
    text-align: center;
    margin: 0;
    padding: 3px;
    font-size: 24px;
 }
`