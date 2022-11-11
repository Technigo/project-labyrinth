import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

const MiniMaze = () => {
  const { coordinates } = useSelector((store) => store.labyrinth.stage);
  const animation = <lottie-player
    src="https://assets1.lottiefiles.com/packages/lf20_r3bmpmp4.json"
    background="transparent"
    speed="1"
    style={{ height: '50px', width: '50px' }}
    loop
    autoplay />
  return (
    <Section>
      <Map>
        {coordinates === '0,0' && <Pin1><span role="img" aria-label="pin">{animation}</span></Pin1>}
        {coordinates === '1,0' && <Pin2><span role="img" aria-label="pin">{animation}</span></Pin2>}
        {coordinates === '1,1' && <Pin3><span role="img" aria-label="pin">{animation}</span></Pin3>}
        {coordinates === '0,1' && <Pin4><span role="img" aria-label="pin">{animation}</span></Pin4>}
        {coordinates === '0,2' && <Pin5><span role="img" aria-label="pin">{animation}</span></Pin5>}
        {coordinates === '0,3' && <Pin6><span role="img" aria-label="pin">{animation}</span></Pin6>}
        {coordinates === '1,3' && <Pin7><span role="img" aria-label="pin">{animation}</span></Pin7>}
      </Map>
    </Section>
  )
}
export default MiniMaze;

const Section = styled.section`
  position: relative;
  width:100px;
  height: 200px;
  justify-self: flex-end;
  margin: auto;
`
const Map = styled.div`
  bottom: 1rem;
  border: 1px dashed #00cf00;;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 10px;
`
const Pin1 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 50px;
  padding: 5px;
`

const Pin2 = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 50px;
  padding: 5px;
`

const Pin3 = styled.span`
  position: absolute;
  bottom: 25%;
  right: 0;
  font-size: 50px;
  padding: 5px;
`

const Pin4 = styled.span`
  position: absolute;
  bottom: 25%;
  left: 0;
  font-size: 50px;
  padding: 5px;
`

const Pin5 = styled.span`
  position: absolute;
  top: 25%;
  left: 0;
  font-size: 50px;
  padding: 5px;
`

const Pin6 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 50px;
  padding: 5px;
  margin-top: 5px;
`

const Pin7 = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 50px;
  padding: 5px;
  margin-top: 5px;
`