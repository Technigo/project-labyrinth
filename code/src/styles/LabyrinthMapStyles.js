import styled from 'styled-components';
import map from 'assets/labyrinth-map.png'

export const MapContainer = styled.div`
  display: grid;
  border-radius: 15px;
  width: 230px;
  height: 230px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4,1fr);
  background-image: url(${map});
  background-size: 100% 100%;
  margin-bottom: 10px;
`

export const Grid = styled.div`
 span {
    display: ${(props) => props.spDisplay || 'none'};
    text-align: center;
    margin: 0;
    padding: 14px;
    font-size: 24px;
 }
`