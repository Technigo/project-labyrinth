import React from 'react';
import styled from 'styled-components/macro';

export const SubmitBtn = styled.button`
    margin: 5px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background-color: #41614C;
    color: white;
    cursor: pointer;
`

export const MainButton = styled.button`
    margin: 0;
    font-size: 22px;
    padding: 15px 18px;
    border-radius: 25px 0 0 0;
    border: none;
    background-color: #666;
    color: white;
    cursor: pointer;
`

const StyledP = styled.p`
    font-size: 26px;
    color: #B3D0B6;
    @media (max-width: 768px) {
      font-size: 18px;
    }
`

export const DirectionArrow = ({ className }) => {
  return (
    <div className={className}>
      <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style={{ enableBackground: 'new 0 0 128 128' }} xmlSpace="preserve">
        <style>{'.st1{display:inline}.st2{fill:#B3D0B6}'}</style>
        <g id="row1_1_">
          <g id="_x31__3_">
            <path className="st2" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" id="_x32__2_" />
          </g>
        </g>
      </svg>
    </div>
  )
}

const NorthArrow = styled(DirectionArrow)`
    width: 80px;
    height: 80px;
    transform: rotate(-90deg);

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

const SouthArrow = styled(DirectionArrow)`
    width: 80px;
    height: 80px;
    transform: rotate(90deg);

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

const WestArrow = styled(DirectionArrow)`
    width: 80px;
    height: 80px;
    transform: rotate(180deg);

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

const EastArrow = styled(DirectionArrow)`
    width: 80px;
    height: 80px;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const North = ({ handleClick }) => {
  return (
    <div className="north" onClick={handleClick} onKeyDown={handleClick} role="presentation">
      <NorthArrow />
      <StyledP>North</StyledP>
    </div>
  )
}

export const South = ({ handleClick }) => {
  return (
    <div className="south" onClick={handleClick} onKeyDown={handleClick} role="presentation">
      <SouthArrow />
      <StyledP>South</StyledP>
    </div>
  )
}

export const West = ({ handleClick }) => {
  return (
    <div className="west" onClick={handleClick} onKeyDown={handleClick} role="presentation">
      <WestArrow />
      <StyledP>West</StyledP>
    </div>
  )
}

export const East = ({ handleClick }) => {
  return (
    <div className="east" onClick={handleClick} onKeyDown={handleClick} role="presentation">
      <EastArrow />
      <StyledP>East</StyledP>
    </div>
  )
}
