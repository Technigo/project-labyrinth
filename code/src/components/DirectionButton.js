import styled from 'styled-components';
import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'; // East
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'; // West
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'; // South
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'; // North

const iconsMap = {
  East: ArrowForwardRoundedIcon,
  West: ArrowBackRoundedIcon,
  South: ArrowDownwardRoundedIcon,
  North: ArrowUpwardRoundedIcon
};

export const DirectionButton = ({ direction, onClick }) => {
  const Icon = iconsMap[direction] || null;
  return <ArrowButton onClick={onClick}>{Icon ? <Icon /> : 'nothing'}</ArrowButton>;
};

const ArrowButton = styled.button`


&&:hover,:focus-visible{

}

&&:active {

}
`